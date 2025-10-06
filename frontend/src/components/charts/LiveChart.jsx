import React, { useEffect, useState, useRef, useMemo } from 'react'

const generateInitial = (n = 20) => Array.from({ length: n }, () => Math.round(Math.random() * 20 + 5))

/**
 * Advanced LiveChart Component
 * 
 * Features:
 * - Real-time updates via EventSource or interval
 * - Smooth CSS animations
 * - Hover tooltips
 * - Pause/resume controls
 * - Configurable themes and gradients
 * - Data point markers
 * - Axis guidelines
 * - Responsive sizing
 * 
 * @param {number} width - Chart width in pixels
 * @param {number} height - Chart height in pixels
 * @param {string} stroke - Primary stroke color
 * @param {number} interval - Update interval in ms (fallback mode)
 * @param {string} streamUrl - SSE endpoint URL
 * @param {string} streamKey - Key to extract from SSE payload
 * @param {boolean} showMarkers - Display data point markers
 * @param {boolean} showTooltip - Enable hover tooltip
 * @param {boolean} showGrid - Display background grid
 * @param {boolean} animate - Enable smooth transitions
 * @param {boolean} showControls - Display pause/play button
 * @param {string} theme - Theme preset: 'default' | 'gradient' | 'minimal'
 */
const LiveChart = ({
  width = 240,
  height = 80,
  stroke = '#6366f1',
  interval = 1000,
  streamUrl = null,
  streamKey = null,
  showMarkers = false,
  showTooltip = false,
  showGrid = false,
  animate = true,
  showControls = false,
  theme = 'gradient'
}) => {
  const [data, setData] = useState(() => generateInitial(24))
  const [isPaused, setIsPaused] = useState(false)
  const [hoveredPoint, setHoveredPoint] = useState(null)
  const svgRef = useRef(null)
  const uniqueId = useRef(`chart-${Math.random().toString(36).substr(2, 9)}`).current

  useEffect(() => {
    if (isPaused) return

    if (streamUrl && typeof EventSource !== 'undefined') {
      const es = new EventSource(streamUrl)
      es.onmessage = (e) => {
        try {
          const payload = JSON.parse(e.data)
          let value = null
          if (streamKey && payload[streamKey] !== undefined) {
            value = Number(payload[streamKey])
          } else {
            const firstNum = Object.values(payload).find((v) => typeof v === 'number')
            value = firstNum !== undefined ? Number(firstNum) : null
          }

          if (value !== null && !Number.isNaN(value)) {
            setData((d) => {
              const next = d.slice(1)
              next.push(Math.round(value / Math.max(1, Math.floor(value / 20))))
              return next
            })
          }
        } catch (err) {
          console.warn('LiveChart: Failed to parse SSE data', err)
        }
      }

      es.onerror = () => {
        console.warn('LiveChart: SSE connection error')
      }

      return () => es.close()
    }

    const id = setInterval(() => {
      setData((d) => {
        const next = d.slice(1)
        next.push(Math.max(0, Math.round(d[d.length - 1] + (Math.random() * 6 - 3))))
        return next
      })
    }, interval)

    return () => clearInterval(id)
  }, [interval, streamUrl, streamKey, isPaused])

  const { max, min, dx, range, points, areaPoints, dataPoints } = useMemo(() => {
    const max = Math.max(...data)
    const min = Math.min(...data)
    const dx = width / (data.length - 1)
    const range = max - min || 1

    const points = data
      .map((v, i) => `${i * dx},${height - ((v - min) / range) * (height - 10) + 5}`)
      .join(' ')

    const areaPoints = `${points} ${width},${height} 0,${height}`

    const dataPoints = data.map((v, i) => ({
      x: i * dx,
      y: height - ((v - min) / range) * (height - 10) + 5,
      value: v
    }))

    return { max, min, dx, range, points, areaPoints, dataPoints }
  }, [data, width, height])

  const handleMouseMove = (e) => {
    if (!showTooltip || !svgRef.current) return
    const rect = svgRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const closestIndex = Math.round(x / dx)
    if (closestIndex >= 0 && closestIndex < dataPoints.length) {
      setHoveredPoint(dataPoints[closestIndex])
    }
  }

  const handleMouseLeave = () => {
    setHoveredPoint(null)
  }

  const gridLines = showGrid
    ? Array.from({ length: 5 }, (_, i) => ({
        y: (height / 4) * i
      }))
    : []

  return (
    <div className="relative inline-block">
      <svg
        ref={svgRef}
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        className={`block ${animate ? 'transition-all duration-300' : ''}`}
        role="img"
        aria-label="Live updating chart"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <defs>
          <linearGradient id={`gradient-${uniqueId}`} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor={stroke} stopOpacity={theme === 'gradient' ? '0.3' : '0.15'} />
            <stop offset="100%" stopColor={stroke} stopOpacity="0.02" />
          </linearGradient>

          <filter id={`shadow-${uniqueId}`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
            <feOffset dx="0" dy="1" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.2" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background grid */}
        {showGrid && (
          <g opacity="0.1">
            {gridLines.map((line, i) => (
              <line
                key={i}
                x1="0"
                y1={line.y}
                x2={width}
                y2={line.y}
                stroke="#6B7280"
                strokeWidth="0.5"
                strokeDasharray="2,2"
              />
            ))}
          </g>
        )}

        {/* Area fill */}
        {theme !== 'minimal' && (
          <polyline points={areaPoints} fill={`url(#gradient-${uniqueId})`} stroke="none" />
        )}

        {/* Main line */}
        <polyline
          points={points}
          fill="none"
          stroke={stroke}
          strokeWidth={theme === 'minimal' ? '1.5' : '2'}
          strokeLinecap="round"
          strokeLinejoin="round"
          filter={theme === 'gradient' ? `url(#shadow-${uniqueId})` : 'none'}
          className={animate ? 'transition-all duration-150' : ''}
        />

        {/* Data point markers */}
        {showMarkers &&
          dataPoints.map((pt, i) => (
            <circle
              key={i}
              cx={pt.x}
              cy={pt.y}
              r={i === dataPoints.length - 1 ? '3' : '1.5'}
              fill={i === dataPoints.length - 1 ? stroke : '#fff'}
              stroke={stroke}
              strokeWidth="1.5"
              className={animate ? 'transition-all duration-150' : ''}
            />
          ))}

        {/* Hovered point indicator */}
        {showTooltip && hoveredPoint && (
          <g>
            <line
              x1={hoveredPoint.x}
              y1="0"
              x2={hoveredPoint.x}
              y2={height}
              stroke={stroke}
              strokeWidth="1"
              strokeDasharray="3,3"
              opacity="0.5"
            />
            <circle cx={hoveredPoint.x} cy={hoveredPoint.y} r="4" fill={stroke} opacity="0.8" />
          </g>
        )}
      </svg>

      {/* Tooltip */}
      {showTooltip && hoveredPoint && (
        <div
          className="absolute z-10 px-2 py-1 text-xs font-medium text-white bg-gray-900 rounded shadow-lg pointer-events-none"
          style={{
            left: `${hoveredPoint.x}px`,
            top: `${hoveredPoint.y - 30}px`,
            transform: 'translateX(-50%)'
          }}
        >
          {hoveredPoint.value.toFixed(1)}
        </div>
      )}

      {/* Controls */}
      {showControls && (
        <button
          onClick={() => setIsPaused(!isPaused)}
          className="absolute p-1 text-gray-500 top-1 right-1 hover:text-gray-700 focus:outline-none"
          aria-label={isPaused ? 'Resume' : 'Pause'}
        >
          {isPaused ? (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M5 4a2 2 0 012-2h2a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V4zm8 0a2 2 0 012-2h2a2 2 0 012 2v12a2 2 0 01-2 2h-2a2 2 0 01-2-2V4z" />
            </svg>
          )}
        </button>
      )}
    </div>
  )
}

export default LiveChart