import React, { useEffect, useState } from 'react'


const generateInitial = (n = 20) => Array.from({ length: n }, () => Math.round(Math.random() * 20 + 5))

const LiveChart = ({ width = 240, height = 80, stroke = '#6366f1', interval = 1000, streamUrl = null, streamKey = null }) => {
  const [data, setData] = useState(() => generateInitial(24))

  useEffect(() => {
    if (streamUrl && typeof EventSource !== 'undefined') {
      const es = new EventSource(streamUrl)
      es.onmessage = (e) => {
        try {
          const payload = JSON.parse(e.data)
          
          let value = null
          if (streamKey && payload[streamKey] !== undefined) value = Number(payload[streamKey])
          else {
            const firstNum = Object.values(payload).find((v) => typeof v === 'number')
            value = firstNum !== undefined ? Number(firstNum) : null
          }

          if (value !== null && !Number.isNaN(value)) {
            setData((d) => {
              const next = d.slice(1)
              // normalize scale slightly so charts stay visible
              next.push(Math.round(value / Math.max(1, Math.floor(value / 20))))
              return next
            })
          }
        } catch (err) {
          
        }
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
  }, [interval, streamUrl, streamKey])

  const max = Math.max(...data)
  const min = Math.min(...data)
  const dx = width / (data.length - 1)
  const range = max - min || 1
  const points = data
    .map((v, i) => `${i * dx},${height - ((v - min) / range) * height}`)
    .join(' ')

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="block" role="img" aria-label="Live chart">
      <defs>
        <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={stroke} stopOpacity="0.15" />
          <stop offset="100%" stopColor={stroke} stopOpacity="0.02" />
        </linearGradient>
      </defs>
      <polyline points={points} fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points={`${points} ${width},${height} 0,${height}`} fill="url(#g)" stroke="none" />
    </svg>
  )
}

export default LiveChart