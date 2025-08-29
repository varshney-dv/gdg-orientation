'use client'

import React, { useState, useEffect } from 'react'
import {Users, Zap, Star, Sparkles, ArrowRight, Brain, Trophy, Target, Rocket, Cpu, Globe, Shield, Flame, Clock } from 'lucide-react'
import GDGLogo from '@/assets/GDGLOGO.png'
import CIRCLE from '@/assets/circle.jpg'
import type { WelcomePageProps } from '@/types/quiz'
import Image from "next/image";
// Enhanced particle system with different types
const ParticleField: React.FC = () => {
  const [particles, setParticles] = useState<Array<{
    id: number
    x: number
    y: number
    size: number
    color: string
    speed: number
    direction: number
  }>>([])

  useEffect(() => {
    const particleCount = 60
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      color: ['cyan', 'purple', 'pink', 'blue', 'emerald'][Math.floor(Math.random() * 5)],
      speed: Math.random() * 2 + 1,
      direction: Math.random() * 360
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Dynamic particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`absolute rounded-full opacity-40 animate-pulse bg-${particle.color}-400`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDuration: `${particle.speed}s`,
            animationDelay: `${Math.random() * 2}s`
          }}
        />
      ))}
      
      {/* Floating geometric shapes with enhanced animations */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-purple-500/20 rotate-45 animate-spin-slow" />
      <div className="absolute top-1/2 right-1/4 w-24 h-24 border-2 border-cyan-500/20 rounded-full animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full animate-float" />
      <div className="absolute top-3/4 right-1/3 w-16 h-16 border-2 border-emerald-500/20 animate-bounce-slow" />
      
      {/* New hexagon shapes */}
      <div className="absolute top-1/6 right-1/6 w-28 h-28 border border-yellow-400/20 transform rotate-12 animate-spin-reverse" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
      <div className="absolute bottom-1/6 left-1/6 w-36 h-36 border border-indigo-400/20 animate-pulse-glow" style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }} />
    </div>
  )
}

// Enhanced 3D card component
interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  gradient: string
  delay?: number
  accentColor: string
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, gradient, delay = 0, accentColor }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className={`group relative overflow-hidden rounded-3xl ${gradient} p-8 backdrop-blur-2xl border border-white/10 transition-all duration-700 transform hover:scale-110 hover:-translate-y-4 cursor-pointer perspective-1000`}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br from-${accentColor}-500/20 via-transparent to-${accentColor}-600/20 opacity-0 group-hover:opacity-100 transition-all duration-700 animate-gradient-xy`} />
      
      {/* Glowing border effect */}
      <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-r from-${accentColor}-500/30 to-${accentColor}-600/30 blur-md -z-10`} />
      
      {/* 3D perspective effect */}
      <div className={`relative z-10 transform transition-all duration-700 ${isHovered ? 'rotateX-12 rotateY-12' : ''}`}>
        <div className="flex flex-col items-center text-center">
          {/* Icon container with enhanced effects */}
          <div className={`relative mb-6 p-4 rounded-2xl bg-gradient-to-br from-${accentColor}-500/20 to-${accentColor}-600/20 backdrop-blur-sm group-hover:from-${accentColor}-400/30 group-hover:to-${accentColor}-500/30 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6`}>
            <div className={`absolute inset-0 rounded-2xl bg-${accentColor}-400/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            <div className="relative z-10">
              {icon}
            </div>
            
            {/* Floating sparkles around icon */}
            <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
            </div>
            <div className="absolute -bottom-1 -left-1 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <Star className="w-3 h-3 text-yellow-300 animate-pulse" style={{ animationDelay: '0.3s' }} />
            </div>
          </div>
          
          <h3 className="font-bold text-white mb-3 text-xl group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-200 transition-all duration-500">
            {title}
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-500">
            {description}
          </p>
          
          {/* Animated bottom accent */}
          <div className={`w-0 h-1 bg-gradient-to-r from-${accentColor}-400 to-${accentColor}-600 mt-4 group-hover:w-full transition-all duration-700 rounded-full`} />
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-2 right-2 w-2 h-2 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-2 left-2 w-2 h-2 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ transitionDelay: '0.2s' }} />
    </div>
  )
}

// Enhanced stats counter component
const StatCounter: React.FC<{ value: string; label: string; icon: React.ReactNode; color: string }> = ({ value, label, icon, color }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className={`flex flex-col items-center p-4 rounded-2xl backdrop-blur-xl bg-gray-900/30 border border-gray-700/30 hover:border-${color}-500/50 transition-all duration-500 group`}>
      <div className={`text-${color}-400 mb-2 group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      <div className={`text-2xl font-bold text-white mb-1 ${isVisible ? 'animate-count-up' : ''}`}>
        {value}
      </div>
      <div className="text-gray-400 text-sm text-center">{label}</div>
    </div>
  )
}

const WelcomePage: React.FC<WelcomePageProps> = ({ onStart }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [currentGlow, setCurrentGlow] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    
    // Cycle through different glow effects
    const interval = setInterval(() => {
      setCurrentGlow(prev => (prev + 1) % 4)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [])

  const features = [
    {
      icon: <Zap className="w-10 h-10 text-cyan-400" />,
      title: "Lightning Fast",
      description: "Experience rapid-fire challenges that test your quick thinking and problem-solving abilities under pressure.",
      gradient: "bg-gradient-to-br from-cyan-900/40 via-blue-900/40 to-cyan-800/40",
      accentColor: "cyan",
      delay: 100
    },
    {
      icon: <Brain className="w-10 h-10 text-purple-400" />,
      title: "AI-Powered Challenges",
      description: "Advanced algorithmic questions designed to push your technical knowledge to the absolute limits.",
      gradient: "bg-gradient-to-br from-purple-900/40 via-pink-900/40 to-purple-800/40",
      accentColor: "purple",
      delay: 200
    },
    {
      icon: <Globe className="w-10 h-10 text-emerald-400" />,
      title: "Global Community",
      description: "Join developers worldwide in the largest tech community network, sharing knowledge and innovations.",
      gradient: "bg-gradient-to-br from-emerald-900/40 via-teal-900/40 to-emerald-800/40",
      accentColor: "emerald",
      delay: 300
    },
    {
      icon: <Shield className="w-10 h-10 text-orange-400" />,
      title: "Secure & Fair",
      description: "Advanced anti-cheat systems ensure fair play and authentic skill assessment for all participants.",
      gradient: "bg-gradient-to-br from-orange-900/40 via-red-900/40 to-orange-800/40",
      accentColor: "orange",
      delay: 400
    }
  ]

  const stats = [
    { value: "10K+", label: "Active Members", icon: <Users className="w-6 h-6" />, color: "cyan" },
    { value: "95%", label: "Success Rate", icon: <Trophy className="w-6 h-6" />, color: "emerald" },
    { value: "500+", label: "Tech Events", icon: <Rocket className="w-6 h-6" />, color: "purple" },
    { value: "24/7", label: "Community Support", icon: <Shield className="w-6 h-6" />, color: "orange" }
  ]

  const glowColors = ['cyan', 'purple', 'emerald', 'pink']

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black relative overflow-hidden">
      <ParticleField />
      
      {/* Enhanced multi-layer background effects */}
      <div className="absolute inset-0 opacity-50">
        <div className={`absolute top-0 left-0 w-96 h-96 bg-${glowColors[currentGlow]}-500/20 rounded-full blur-3xl animate-pulse-glow transition-colors duration-3000`} />
        <div className={`absolute bottom-0 right-0 w-96 h-96 bg-${glowColors[(currentGlow + 1) % 4]}-500/20 rounded-full blur-3xl animate-pulse-glow transition-colors duration-3000`} style={{ animationDelay: '1s' }} />
        <div className={`absolute top-1/2 left-1/2 w-64 h-64 bg-${glowColors[(currentGlow + 2) % 4]}-500/20 rounded-full blur-3xl animate-pulse-glow transition-colors duration-3000`} style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.2) 2px, transparent 0)`,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }} />
      </div>
      
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className={`max-w-7xl mx-auto transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          
          {/* Main hero section */}
          <div className="backdrop-blur-3xl bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-3xl p-8 md:p-16 border border-white/10 shadow-2xl mb-12">
            
            {/* Enhanced logo and header section */}
            <div className="text-center mb-12">
              <div className="relative inline-block mb-8">
                {/* Rotating ring around logo */}
                <div className="absolute inset-0 w-32 h-32 md:w-40 md:h-40 border-2 border-gradient-to-r border-cyan-500/30 rounded-full animate-spin-slow" />
                <div className="absolute inset-2 w-28 h-28 md:w-36 md:h-36 border border-purple-500/30 rounded-full animate-spin-reverse" />
                
                {/* Logo container */}
                <div className="relative w-36 h-32 md:w-44 md:h-44 mx-auto flex items-center justify-center">
                  <Image
                    src={GDGLogo}
                    alt="GDG Logo"
                    width={44}
                    height={44}
                    className="w-20 h-14 md:w-40 md:h-24 object-contain filter drop-shadow-lg"
                  />
                  
                  {/* Floating elements around logo */}
                  <div className="absolute -top-2 -right-2 animate-bounce">
                    <Flame className="w-6 h-6 text-orange-400" />
                  </div>
                  <div className="absolute -bottom-2 -left-2 animate-pulse">
                    <Cpu className="w-5 h-5 text-cyan-400" />
                  </div>
                </div>
              </div>
              
              {/* Enhanced title with multiple gradients */}
              <h1 className="text-5xl md:text-8xl font-black mb-6 leading-none">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
                  GDG NITJ
                </span>
              </h1>
              
              {/* Animated tagline */}
              <div className="flex items-center justify-center gap-2 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current animate-twinkle" style={{ animationDelay: `${i * 0.3}s` }} />
                ))}
              </div>
              
              {/* Main headline */}
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Welcome to the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-gradient-x">Future of Tech</span>
              </h2>
              
              {/* Enhanced description */}
              <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Embark on an extraordinary journey where cutting-edge technology meets limitless innovation. 
                Join the most elite community of developers, creators, and visionaries shaping tomorrow&apos;s digital revolution.
              </p>

              
              
              {/* Stats section */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
                {stats.map((stat, index) => (
                  <StatCounter key={index} {...stat} />
                ))}
              </div>
            </div>

            <div className=' flex justify-center'>
                <button
                  onClick={onStart}
                  className="group relative inline-flex items-center gap-4 px-16 py-6 mb-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-bold text-xl md:text-2xl rounded-full shadow-2xl hover:shadow-cyan-500/50 transform hover:scale-105 transition-all duration-500 overflow-hidden animate-pulse-glow"
                  type="button"
                >
                  {/* Animated background overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Button content */}
                  <span className="relative z-10 flex items-center gap-4">
                    <Trophy className="w-8 h-8 animate-bounce" />
                    <span>Begin Your Journey</span>
                    <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                  
                  {/* Ripple effect */}
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-150 bg-white transition-all duration-700" />
                </button>
            </div>

            {/* Enhanced features grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>

            {/* Enhanced call to action section */}
            <div className="text-center space-y-8">
              {/* Main CTA button with advanced effects */}
              <div className="relative inline-block">
                
                
                {/* Floating action indicators */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="flex gap-1">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: `${i * 0.1}s` }} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Social Follow Section */}
<div className="mt-12 flex flex-col items-center space-y-4">
  <p className="text-gray-300 text-lg">📸 Stay connected with us on Instagram</p>
  <a
    href="https://instagram.com/dscnitj"
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-pink-500/50 transition-all duration-500"
  >
    {/* Insta gradient border ring */}
    <div className="p-2 rounded-full bg-white/20 group-hover:bg-white/30 transition-all">
      <Image
        src={CIRCLE} // 🔥 Place Instagram logo in public/insta.png
        alt="Instagram"
        width={28}
        height={28}
        className="rounded-md"
      />
    </div>
    <span className="text-lg">@dscnitj</span>
  </a>
</div>

              
              {/* Secondary actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <div className="flex items-center gap-2 text-gray-400">
                  <Clock className="w-5 h-5" />
                  <span>Avg. completion: 15 seconds</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Target className="w-5 h-5" />
                  <span>Difficulty: Adaptive</span>
                </div>
              </div>
              
              {/* Motivational message */}
              <div className="p-8 backdrop-blur-xl bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-purple-900/20 rounded-3xl border border-purple-500/20 max-w-2xl mx-auto">
                <p className="text-gray-300 font-medium mb-3 text-lg">
                  🚀 Ready to unlock your potential?
                </p>
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 font-bold text-xl animate-gradient-x">
                  Join 10,000+ innovators building the future, one line of code at a time!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WelcomePage