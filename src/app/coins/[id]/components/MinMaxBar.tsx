// components/CryptoMinMaxBar.tsx
import React, { useRef, useEffect } from 'react'
import * as d3 from 'd3'

interface CryptoMinMaxBarProps {
  min: number
  max: number
  current: number
}

const CryptoMinMaxBar: React.FC<CryptoMinMaxBarProps> = ({
  min,
  max,
  current
}) => {
  const svgRef = useRef<SVGSVGElement | null>(null)

  useEffect(() => {
    if (!svgRef.current) return

    const svg = d3.select(svgRef.current)
    const width = 200 // Base width for calculations
    const height = 40 // Base height for calculations
    const barHeight = height / 4 // Height of the horizontal bar

    // Set viewBox to make the SVG responsive
    svg
      .attr('viewBox', `0 0 ${width} ${height}`)
      .attr('preserveAspectRatio', 'xMidYMid meet')
      .attr('width', '100%')
      .attr('height', 'auto')

    // Clear any previous elements
    svg.selectAll('*').remove()

    // Scale for x-axis based on min and max
    const xScale = d3
      .scaleLinear()
      .domain([min, max])
      .range([50, width - 50]) // Flexible margins for labels

    // Define gradient for min-max bar
    const gradient = svg
      .append('defs')
      .append('linearGradient')
      .attr('id', 'barGradient')
      .attr('x1', '0%')
      .attr('y1', '0%')
      .attr('x2', '100%')
      .attr('y2', '0%')

    gradient.append('stop').attr('offset', '0%').attr('stop-color', 'red')

    gradient.append('stop').attr('offset', '100%').attr('stop-color', 'green')

    // Draw horizontal min-max bar
    svg
      .append('rect')
      .attr('x', xScale(min))
      .attr('y', height / 2 - barHeight / 2)
      .attr('width', xScale(max) - xScale(min))
      .attr('height', barHeight)
      .attr('fill', 'url(#barGradient)')

    // Draw a line for the current price
    svg
      .append('line')
      .attr('x1', xScale(current))
      .attr('x2', xScale(current))
      .attr('y1', height / 2 - barHeight / 2 - 5)
      .attr('y2', height / 2 + barHeight / 2 + 5)
      .attr('stroke', 'black')
      .attr('stroke-width', 1)
      .attr('stroke-dasharray', '3 2')

    // Set dynamic font size based on width
    const fontSize = width * 0.03

    // Add labels for min, max, and current price with dynamic positioning
    svg
      .append('text')
      .attr('x', xScale(min))
      .attr('y', height / 2 + barHeight + fontSize)
      .attr('text-anchor', 'middle')
      .attr('font-size', fontSize)
      .attr('fill', 'red')
      .text(`Min: ${min}`)

    svg
      .append('text')
      .attr('x', xScale(max))
      .attr('y', height / 2 + barHeight + fontSize)
      .attr('text-anchor', 'middle')
      .attr('font-size', fontSize)
      .attr('fill', 'green')
      .text(`Max: ${max}`)

    svg
      .append('text')
      .attr('x', xScale(current))
      .attr('y', height / 2 - barHeight / 2 - fontSize * 0.5)
      .attr('text-anchor', 'middle')
      .attr('font-size', fontSize)
      .attr('fill', 'black')
      .text(`Current: ${current}`)
  }, [min, max, current])

  return <svg ref={svgRef} style={{ width: '100%', height: 'auto' }}></svg>
}

export default CryptoMinMaxBar
