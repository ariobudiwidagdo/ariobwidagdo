'use client'
import React from 'react'
import { useTheme } from '@/context/ThemeContext'

const AnimatedPerson = () => {
  const { theme } = useTheme()

  return (
    <div className="flex justify-center items-center mb-8">
      <div className="relative">
        {/* Floating animation container */}
        <div className="animate-bounce">
          <svg
            width="220"
            height="260"
            viewBox="0 0 220 260"
            className="drop-shadow-2xl"
          >
            {/* Background glow */}
            <defs>
              <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor={theme === 'dark' ? '#3b82f6' : '#60a5fa'} stopOpacity="0.3" />
                <stop offset="100%" stopColor={theme === 'dark' ? '#1e40af' : '#2563eb'} stopOpacity="0.1" />
              </radialGradient>
              <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={theme === 'dark' ? '#8b5cf6' : '#a855f7'} />
                <stop offset="100%" stopColor={theme === 'dark' ? '#3b82f6' : '#2563eb'} />
              </linearGradient>
            </defs>
            
            {/* Background circle with glow */}
            <circle
              cx="110"
              cy="130"
              r="90"
              fill="url(#glow)"
              className="animate-pulse"
            />
            
            {/* Modern character body */}
            <rect
              x="85"
              y="140"
              width="50"
              height="70"
              rx="25"
              fill="url(#bodyGrad)"
              className="animate-pulse"
            />
            
            {/* Head with gradient */}
            <circle
              cx="110"
              cy="100"
              r="25"
              fill={theme === 'dark' ? '#fbbf24' : '#f59e0b'}
              className="animate-pulse"
            />
            
            {/* Hair */}
            <path
              d="M 85 85 Q 110 70 135 85 Q 130 75 110 75 Q 90 75 85 85"
              fill={theme === 'dark' ? '#374151' : '#1f2937'}
            />
            

            
            {/* Modern arms with sleeves */}
            <g className="animate-pulse">
              <rect
                x="60"
                y="130"
                width="15"
                height="40"
                rx="7"
                fill={theme === 'dark' ? '#6366f1' : '#4f46e5'}
                transform="rotate(-15 67 150)"
              />
              <rect
                x="145"
                y="130"
                width="15"
                height="40"
                rx="7"
                fill={theme === 'dark' ? '#6366f1' : '#4f46e5'}
                transform="rotate(15 152 150)"
              />
            </g>
            
            {/* Hands with laptop gesture */}
            <g className="animate-bounce">
              <circle cx="55" cy="155" r="8" fill={theme === 'dark' ? '#fbbf24' : '#f59e0b'} />
              <circle cx="165" cy="155" r="8" fill={theme === 'dark' ? '#fbbf24' : '#f59e0b'} />
              {/* Laptop */}
              <rect x="90" y="150" width="40" height="25" rx="3" fill={theme === 'dark' ? '#374151' : '#1f2937'} />
              <rect x="92" y="152" width="36" height="15" rx="2" fill={theme === 'dark' ? '#60a5fa' : '#3b82f6'} />
            </g>
            
            {/* Legs */}
            <g className="animate-pulse">
              <rect
                x="95"
                y="210"
                width="12"
                height="35"
                rx="6"
                fill={theme === 'dark' ? '#1f2937' : '#374151'}
              />
              <rect
                x="113"
                y="210"
                width="12"
                height="35"
                rx="6"
                fill={theme === 'dark' ? '#1f2937' : '#374151'}
              />
            </g>
            
            {/* Shoes */}
            <ellipse cx="101" cy="250" rx="10" ry="5" fill={theme === 'dark' ? '#ef4444' : '#dc2626'} />
            <ellipse cx="119" cy="250" rx="10" ry="5" fill={theme === 'dark' ? '#ef4444' : '#dc2626'} />
          </svg>
        </div>
        
        {/* Code symbols floating around */}
        <div className="absolute -top-6 -left-6 text-2xl animate-ping text-blue-400">{'<>'}</div>
        <div className="absolute -top-4 -right-8 text-xl animate-ping text-purple-400" style={{animationDelay: '0.5s'}}>{'{ }'}</div>
        <div className="absolute -bottom-4 -left-4 text-lg animate-ping text-green-400" style={{animationDelay: '1s'}}>{'</>'}</div>
        <div className="absolute -bottom-6 -right-6 text-xl animate-ping text-yellow-400" style={{animationDelay: '1.5s'}}>{'( )'}</div>
        <div className="absolute top-8 -right-10 text-sm animate-ping text-pink-400" style={{animationDelay: '2s'}}>{'[ ]'}</div>
      </div>
    </div>
  )
}

export default AnimatedPerson