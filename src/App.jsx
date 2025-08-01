import React, { useState, useEffect } from 'react'
import './App.css'
import waveImage from './assets/wave.jpg?url';

// 导航组件
function Navigation({ currentPage, setCurrentPage }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  const navItems = [
    { id: 'home', label: '首页' },
    { id: 'about', label: '关于我们' },
    { id: 'courses', label: '课程培训' },
    { id: 'news', label: '资讯动态' },
    { id: 'contact', label: '联系我们' }
  ]

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="w-full px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo区域 */}
          <div className="flex items-center flex-shrink-0">
            <img 
              src="/logo.png" 
              alt="海通跨境财税" 
              className="h-10 w-auto"
            />
          </div>
          
          {/* 导航菜单 */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    currentPage === item.id
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          
          {/* 移动端菜单按钮 */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* 移动端菜单展开内容 */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id)
                  setIsMobileMenuOpen(false)
                }}
                className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors duration-200 rounded-md ${
                  currentPage === item.id
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

// 首页组件
function HomePage({ setCurrentPage }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 英雄区域 */}
      <section 
        className="relative text-white h-[50vh]"
      >
        {/* 背景图片 */}
        <img src={waveImage} alt="background" className="absolute inset-0 w-full h-full object-cover" />
        {/* 背景遮罩 - 暂时移除 */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-20"></div> */}
        
        {/* 内容区域 */}
        <div className="relative w-full h-full flex flex-col items-center justify-center px-1 sm:px-2 lg:px-3 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
              跨境财税合规专家
              <span className="block text-blue-200">值得信赖的伙伴</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-blue-100 drop-shadow-md">
              海通财务为您提供全方位的跨境财税解决方案
            </p>
            
            {/* 按钮组 */}
            <div className="flex flex-row gap-2 sm:gap-4 justify-center items-center flex-wrap">
              <button 
                onClick={() => setCurrentPage('about')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 sm:py-4 sm:px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl min-w-[100px] sm:min-w-[140px] text-sm sm:text-base"
              >
                关于我们
              </button>
              <button className="bg-white hover:bg-gray-100 text-blue-600 font-semibold py-3 px-4 sm:py-4 sm:px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl min-w-[100px] sm:min-w-[140px] text-sm sm:text-base">
                报关平台
              </button>
              <button 
                onClick={() => setCurrentPage('contact')}
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 text-white font-semibold py-3 px-4 sm:py-4 sm:px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl min-w-[100px] sm:min-w-[140px] text-sm sm:text-base"
              >
                联系我们
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 第一板块：公司简介 */}
      <section className="py-16 bg-white relative">
        <div className="w-full">
          <div className="w-full">
            {/* 公司简介内容 */}
            <div className="p-8 bg-gray-50">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">公司简介</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                深圳市海通财务管理有限公司,专注于建立跨境电商财税合规、 跨境股权设计、供应链与现金流管理为一体的综合服务平台。企业团队由业内资深的工商服务组、财税合规组、税务筹划组、出口退税组、顾问咨询组等构成，为企业高质量的服务提供保障。
              </p>
              <p className="text-gray-700 leading-relaxed">
                海通财务秉承与跨境企业"共同进步、共谋利益、共图发展" 的理念，坚持"高效、执行"的管理思想，依托30年+财务管理和服务经验，以及专业财税团队的实力保障，不断深挖研究跨境企业发展的痛点,拟打造"海通——跨境企业命运共同体"，囊括了跨境电商财务资金合规、财税筹划、进出口权及出口退税、股权设计、供应链现金流管理、企业融资及上市服务。旨在解决跨境企业财税资金，以及企业架构、供应链和现金流等方面的疑难杂症，从而实现缓解企业生存压力、提升企业发展效率的目标。
              </p>
            </div>
          </div>
        </div>
        {/* 分界线 */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4/5 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-60"></div>
      </section>


      {/* 详细案例展示 */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="w-full px-1 sm:px-2 lg:px-3">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="lg:flex">
              {/* 左侧图片区域 */}
              <div className="lg:w-1/3 bg-gradient-to-br from-primary-600 to-primary-800 p-8 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="mb-6">
                    <svg className="w-20 h-20 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z"/>
                      <path d="M10 17l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" fill="white"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">成功案例</h3>
                  <p className="text-primary-100">专业服务 · 值得信赖</p>
                  <div className="mt-6 space-y-2">
                    <div className="bg-white/20 rounded-lg p-3">
                      <div className="text-3xl font-bold">1.6亿</div>
                      <div className="text-sm text-primary-100">年营收规模</div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-3">
                      <div className="text-3xl font-bold">40+</div>
                      <div className="text-sm text-primary-100">网店数量</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 右侧内容区域 */}
              <div className="lg:w-2/3 p-8">
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    跨境电商顾问服务案例
                  </h2>
                  <p className="text-lg text-primary-600 font-semibold">
                    家居贸易企业 · 2024年营收1.6亿元
                  </p>
                </div>
                
                {/* 客户背景 */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    客户背景
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-gray-700 leading-relaxed">
                      深圳某跨境电商贸易公司，专营家居用品，拥有亚马逊21家店铺、阿里国际站3家、eBay 5家等40+网店，
                      员工50多人，2023年营收1.4亿元，2024年突破1.6亿元。
                    </p>
                  </div>
                </div>
                
                {/* 核心痛点 */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    核心痛点
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
                      <h4 className="font-semibold text-red-800 mb-1">财务合规风险</h4>
                      <p className="text-red-700 text-sm">两套账运营，内外账收入相差近50%，税务风险巨大</p>
                    </div>
                    <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
                      <h4 className="font-semibold text-red-800 mb-1">资金管理混乱</h4>
                      <p className="text-red-700 text-sm">私账收款金额巨大，30%无票采购，资金流不规范</p>
                    </div>
                    <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
                      <h4 className="font-semibold text-red-800 mb-1">退税受阻</h4>
                      <p className="text-red-700 text-sm">出口退税过程中经常遇到问题，影响资金周转</p>
                    </div>
                    <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
                      <h4 className="font-semibold text-red-800 mb-1">效率低下</h4>
                      <p className="text-red-700 text-sm">4个会计每月一半时间计算提成，经常出错</p>
                    </div>
                  </div>
                </div>
                
                {/* 解决方案 */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    解决方案
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
                      <h4 className="font-semibold text-green-800 mb-2">1. 架构重塑</h4>
                      <p className="text-green-700 text-sm mb-2">设立三层股权架构：家族公司→防火墙公司→主体公司</p>
                      <p className="text-green-700 text-sm">ODI控股香港公司，通过香港公司投资控股境外公司</p>
                    </div>
                    <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
                      <h4 className="font-semibold text-green-800 mb-2">2. 财务合规</h4>
                      <p className="text-green-700 text-sm">内外账逐步合并，解决银行存款、应收应付等科目差异</p>
                    </div>
                    <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
                      <h4 className="font-semibold text-green-800 mb-2">3. 风险化解</h4>
                      <p className="text-green-700 text-sm">境外私人账户大额资金逐步消化，避免CRS核查风险</p>
                    </div>
                  </div>
                </div>
                
                {/* 核心成果 */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    核心成果
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-blue-50 text-center p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-1">100%</div>
                      <div className="text-sm text-blue-800">财务合规化</div>
                    </div>
                    <div className="bg-blue-50 text-center p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-1">0风险</div>
                      <div className="text-sm text-blue-800">税务核查</div>
                    </div>
                    <div className="bg-blue-50 text-center p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-1">50%↑</div>
                      <div className="text-sm text-blue-800">工作效率</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 服务项目展示 */}
      <section className="py-20 bg-white">
        <div className="w-full px-1 sm:px-2 lg:px-3">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">我们的服务</h2>
            <p className="text-xl text-gray-600">专业的跨境财税合规解决方案</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* 合规会计外包 */}
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">合规会计外包</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                财务总监+专业会计服务，一站式整包财税合规所有工作
              </p>
            </div>
            
            {/* 财税顾问指导 */}
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">财税顾问指导</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                资深财务总监一对一顾问指导，专业会计手把手实操指导，包教包会
              </p>
            </div>
            
            {/* 出口退税办理 */}
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">出口退税办理</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                专业团队、高效办理、极速退税、收费灵活、一对一办理
              </p>
            </div>
            
            {/* 财税课程学习 */}
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">财税课程学习</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                跨境企业财税合规、股权设计、绩效管理、阿米巴经营学等线上线下课程
              </p>
            </div>
          </div>
          
          {/* 服务人群 */}
          <div className="bg-primary-50 rounded-lg p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">服务人群</h3>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                小规模纳税人、一般纳税人、个体工商户、个人独资企业等需要专业财税合规指导的企业
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 服务优势 */}
      <section className="py-20 bg-gray-50">
        <div className="w-full px-1 sm:px-2 lg:px-3">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              我们的服务优势
            </h2>
            <p className="text-xl text-gray-600">
              专业团队，贴心服务，为您的财富保驾护航
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">专业可靠</h3>
              <p className="text-gray-600">多年行业经验，专业团队为您提供可靠的跨境财税合规服务</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">高效便捷</h3>
              <p className="text-gray-600">简化流程，快速响应，让您享受高效便捷的服务体验</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">贴心服务</h3>
              <p className="text-gray-600">一对一专属服务，全程跟踪，确保您的每一个需求都得到满足</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// 关于我们页面
function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12">
      <div className="max-w-full mx-auto px-2 sm:px-4 lg:px-6">
        {/* 创始人介绍 */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-blue-100">
          <div className="lg:flex lg:items-center lg:gap-12">
            {/* 左侧：基本信息 */}
            <div className="lg:w-2/5 text-center lg:text-left mb-8 lg:mb-0 lg:pl-8">
              <div className="inline-block">
                <div className="w-48 h-48 mx-auto lg:mx-0 mb-6 rounded-full overflow-hidden border-4 border-blue-300 shadow-xl">
                  <img 
                    src="/frank.png" 
                    alt="Frank" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center" style={{display: 'none'}}>
                    <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold text-gray-900">范诗科 Frank</h3>
                  <p className="text-xl text-blue-600 font-semibold">资深跨境财税顾问&讲师</p>
                  <p className="text-lg text-gray-600">CEO & 企业创始人</p>
                
                </div>
              </div>
            </div>
            
            {/* 右侧：详细介绍 */}
            <div className="lg:w-3/5 lg:pl-12">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center lg:text-left">专业背景与成就</h4>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {/* 左列 */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mt-1 flex-shrink-0"></div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-1">公司创始人</h5>
                        <p className="text-sm text-gray-600">深圳市海通财务管理有限公司</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mt-1 flex-shrink-0"></div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-1">丰富经验</h5>
                        <p className="text-sm text-gray-600">30年+财务管理服务经验</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mt-1 flex-shrink-0"></div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-1">专业领域</h5>
                        <p className="text-sm text-gray-600">跨境电商财税合规专家</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* 右列 */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mt-1 flex-shrink-0"></div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-1">核心服务</h5>
                        <p className="text-sm text-gray-600">一站式财税解决方案</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mt-1 flex-shrink-0"></div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-1">专业特长</h5>
                        <p className="text-sm text-gray-600">跨境股权设计与供应链管理</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mt-1 flex-shrink-0"></div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-1">团队领导</h5>
                        <p className="text-sm text-gray-600">带领专业团队提供高质量服务</p>
                      </div>
                    </div>
                  </div>
                </div>
                

              </div>
            </div>
          </div>
        </div>
        
        {/* 核心优势 1+3 */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-xl p-10 mb-16 border border-blue-100">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              核心优势 1+3
            </h2>
            <div className="bg-white rounded-xl p-6 max-w-4xl mx-auto shadow-lg border border-blue-200">
              <p className="text-lg text-gray-700 leading-relaxed">
                为跨境企业提供全方位的财税合规整包落地服务<br/>
                <span className="font-bold text-blue-600 text-xl">"1"</span>指一个财务总监，<span className="font-bold text-blue-600 text-xl">"3"</span>指合规会计、税务会计、工商专员
              </p>
            </div>
          </div>
          
          {/* 四宫格布局 */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* 财务总监 - 第一位，突出显示 */}
              <div className="group bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-blue-400 hover:border-blue-300 col-span-2 lg:col-span-1">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">财务总监</h3>
                  <div className="text-blue-100 space-y-2 leading-relaxed">
                    <p>• 全程参与，统筹把控</p>
                    <p>• 整体规划，合理合规</p>
                    <p>• 把财税成本和风险做到最低</p>
                  </div>
                </div>
              </div>
              {/* 合规会计 */}
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-blue-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-blue-600 mb-4">合规会计</h3>
                <ul className="text-gray-600 space-y-3 leading-relaxed">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>为跨境企业量身定做合规账务处理</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>成本费用准确核算</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>报送合规会计报表</span>
                  </li>
                </ul>
              </div>
              
              {/* 税务会计 */}
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-blue-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-blue-600 mb-4">税务会计</h3>
                <ul className="text-gray-600 space-y-3 leading-relaxed">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>为跨境企业提供合规报税</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>负责出口退税/免税办理</span>
                  </li>
                </ul>
              </div>
              
              {/* 工商专员 */}
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-blue-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-blue-600 mb-4">工商专员</h3>
                <ul className="text-gray-600 space-y-3 leading-relaxed">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>为跨境企业提供合规架构落地</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>工商注册、变更服务</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>出口相关备案等服务</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* 业务介绍_会计外包 */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-xl p-10 mb-16 border border-blue-100">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              业务介绍_会计外包
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* 外包介绍 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-blue-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-600 mb-6">外包介绍</h3>
              <div className="text-gray-600 space-y-4 leading-relaxed">
                <p className="font-semibold text-red-600">90%以上跨境电商财税不合规</p>
                <p>根本原因在于老板不懂财税，不知从何入手，缺少专业财务人员，2024年财税合规形势更加迫切。</p>
                <p>合规会计外包专为跨境中小卖家定制，提供财税合规方案实操服务，财务总监统筹把控，专业会计负责实操办理，一站式解决老板的财税烦恼。</p>
              </div>
            </div>
            
            {/* 服务形式 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-blue-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-600 mb-6">服务形式</h3>
              <div className="text-gray-600 space-y-4 leading-relaxed">
                <div>
                  <p className="font-semibold text-blue-600 mb-2">服务对象：</p>
                  <p>跨境/外贸企业</p>
                </div>
                <div>
                  <p className="font-semibold text-blue-600 mb-2">服务方式：</p>
                  <p>财务总监+专业会计，深圳地区可定期安排一次上门对接/采集和指导</p>
                </div>
                <div>
                  <p className="font-semibold text-blue-600 mb-2">收费方式：</p>
                  <p>根据企业规模而定</p>
                </div>
              </div>
            </div>
            
            {/* 外包内容 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-blue-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-600 mb-6">外包内容</h3>
              <ul className="text-gray-600 space-y-3 leading-relaxed text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold flex-shrink-0">1.</span>
                  <span>多公司/多店铺之间合规架构搭建</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold flex-shrink-0">2.</span>
                  <span>境外资金合规回款设计</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold flex-shrink-0">3.</span>
                  <span>按会计准则的要求编制记账凭证/报表，正确核算收入/成本费用</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold flex-shrink-0">4.</span>
                  <span>每月报送财务报表(包含资产负债表、利润表)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold flex-shrink-0">5.</span>
                  <span>每月定期申报税务</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold flex-shrink-0">6.</span>
                  <span>每季度报送一份公司整体税务情况报告</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold flex-shrink-0">7.</span>
                  <span>办理出口退税/免税 (如有需求)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold flex-shrink-0">8.</span>
                  <span>为甲方做税务规划，降低税务风险，降低税收成本</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold flex-shrink-0">9.</span>
                  <span>对甲方财税规范相关事宜做咨询/规划设计</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* 业务介绍_出口退税 */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-xl p-10 mb-16 border border-blue-100">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              业务介绍_出口退税
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* 出口退税介绍 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-blue-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-600 mb-6">出口退税介绍</h3>
              <div className="text-gray-600 space-y-4 leading-relaxed">
                <p>出口退税，是跨境电商常见的一种合规方式，多数跨境企业都有出口退税的需求，但缺少专业的退税人员。</p>
                <p>出口退税代办旨在为跨境企业解决退税难的问题，财务专人负责退税资料整理、提交、沟通，财务总监把控退税中的风险点。</p>
              </div>
            </div>
            
            {/* 服务内容 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-blue-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-600 mb-6">服务内容</h3>
              <ul className="text-gray-600 space-y-3 leading-relaxed text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold flex-shrink-0">1.</span>
                  <span>企业整体股权架构梳理</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold flex-shrink-0">2.</span>
                  <span>外汇资金回款梳理</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold flex-shrink-0">3.</span>
                  <span>各类票据报关单据、货运单据的归集和整理</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold flex-shrink-0">4.</span>
                  <span>退税资料提交</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold flex-shrink-0">5.</span>
                  <span>退税进度跟进，协助接洽专员上门核查</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold flex-shrink-0">6.</span>
                  <span>退税过程中易发生的风险点防范，特别是供应商函调</span>
                </li>
              </ul>
            </div>
            
            {/* 服务形式 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-blue-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-600 mb-6">服务形式</h3>
              <div className="text-gray-600 space-y-4 leading-relaxed">
                <div>
                  <p className="font-semibold text-blue-600 mb-2">服务对象：</p>
                  <p>跨境、外贸企业</p>
                </div>
                <div>
                  <p className="font-semibold text-blue-600 mb-2">服务方式：</p>
                  <p>主要为深圳、广州地区企业提供代办服务，其他地区提供线上指导服务</p>
                </div>
                <div>
                  <p className="font-semibold text-blue-600 mb-2">收费方式：</p>
                  <p>根据企业出口货物值而定</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 业务介绍_其他服务 */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-xl p-10 border border-blue-100">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              业务介绍_其他服务
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 xl:grid-cols-2 gap-8">
            {/* 01 企业财税风险排查及防范 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-blue-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-2xl">01</span>
                </div>
                <h3 className="text-2xl font-bold text-blue-600">企业财税风险排查及防范</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-blue-600 mb-2">服务内容：</p>
                  <p className="text-gray-600 leading-relaxed">店铺公司记账报税</p>
                </div>
                <div>
                  <p className="font-semibold text-blue-600 mb-2">服务收费：</p>
                  <p className="text-gray-600 leading-relaxed">各项服务以实时报价为准</p>
                </div>
              </div>
            </div>
            
            {/* 02 备案服务 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-blue-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-2xl">02</span>
                </div>
                <h3 className="text-2xl font-bold text-blue-600">备案服务</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-blue-600 mb-2">服务内容：</p>
                  <p className="text-gray-600 leading-relaxed">为企业进行海关、税务、外汇、银行、跨境平台等6-8个备案</p>
                </div>
                <div>
                  <p className="font-semibold text-blue-600 mb-2">服务收费：</p>
                  <p className="text-gray-600 leading-relaxed">如和其他服务一起做可享有一定优惠</p>
                </div>
              </div>
            </div>
            
            {/* 03 香港公司服务 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-blue-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-2xl">03</span>
                </div>
                <h3 className="text-2xl font-bold text-blue-600">香港公司服务</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-blue-600 mb-2">服务内容：</p>
                  <div className="text-gray-600 leading-relaxed space-y-1">
                    <p>• 香港公司注册、开户</p>
                    <p>• 香港公司账务处理/年审、审计</p>
                    <p>• 境外投资备案DDI</p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-blue-600 mb-2">服务收费：</p>
                  <p className="text-gray-600 leading-relaxed">各项服务以实时报价为准</p>
                </div>
              </div>
            </div>
            
            {/* 04 股权设计服务 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-blue-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-2xl">04</span>
                </div>
                <h3 className="text-2xl font-bold text-blue-600">股权设计服务</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-blue-600 mb-2">服务内容：</p>
                  <div className="text-gray-600 leading-relaxed space-y-1">
                    <p>• 企业内部或外部合伙股权设计</p>
                    <p>• 企业合伙人股权激励设计</p>
                    <p>• 企业内部绩效方案设计</p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-blue-600 mb-2">服务收费：</p>
                  <p className="text-gray-600 leading-relaxed">如和其他服务一起做可享有一定优惠</p>
                </div>
              </div>
            </div>
            
            {/* 05 阿米巴经营模式 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-blue-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-2xl">05</span>
                </div>
                <h3 className="text-2xl font-bold text-blue-600">阿米巴经营模式</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-blue-600 mb-2">服务内容：</p>
                  <p className="text-gray-600 leading-relaxed">跨境企业内部阿米巴经营模式方案设计及落地指导</p>
                </div>
                <div>
                  <p className="font-semibold text-blue-600 mb-2">服务收费：</p>
                  <p className="text-gray-600 leading-relaxed">各项服务以实时报价为准</p>
                </div>
              </div>
            </div>
            
            {/* 06 融资及上市服务 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-blue-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-2xl">06</span>
                </div>
                <h3 className="text-2xl font-bold text-blue-600">融资及上市服务</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-blue-600 mb-2">服务内容：</p>
                  <div className="text-gray-600 leading-relaxed space-y-1">
                    <p>• 跨境企业融资、供应链融资</p>
                    <p>• 高新技术企业代办</p>
                    <p>• IPO上市辅导服务</p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-blue-600 mb-2">服务收费：</p>
                  <p className="text-gray-600 leading-relaxed">如和其他服务一起做可享有一定优惠</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// 服务项目页面
function ServicesPage() {
  const services = [
    {
      title: "合规会计外包",
      description: "财务总监+专业会计服务，一站式整包财税合规所有工作",
      features: ["财务总监服务", "专业会计团队", "一站式服务", "财税合规"]
    },
    {
      title: "财税顾问指导",
      description: "资深财务总监一对一顾问指导，专业会计手把手实操指导，包教包会",
      features: ["一对一顾问", "实操指导", "包教包会", "资深总监"]
    },
    {
      title: "出口退税办理",
      description: "专业团队、高效办理、极速退税、收费灵活、一对一办理",
      features: ["专业团队", "高效办理", "极速退税", "收费灵活"]
    },
    {
      title: "财税课程学习",
      description: "跨境企业财税合规、股权设计、绩效管理、阿米巴经营学等线上线下课程",
      features: ["跨境财税合规", "股权设计", "绩效管理", "阿米巴经营"]
    }
  ];

  const targetAudience = {
    title: "服务人群",
    description: "专业财税合规指导服务",
    groups: ["小规模纳税人", "一般纳税人", "个体工商户", "个人独资企业"]
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="w-full px-1 sm:px-2 lg:px-3">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">核心服务项目</h1>
          <p className="text-xl text-gray-600">专业的财税合规服务，为您的企业保驾护航</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{targetAudience.title}</h2>
            <p className="text-lg text-gray-600">{targetAudience.description}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetAudience.groups.map((group, index) => (
              <div key={index} className="text-center p-4 bg-primary-50 rounded-lg">
                <div className="w-12 h-12 bg-primary-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <h3 className="font-semibold text-gray-900">{group}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TrainingPage() {
  const courses = [
    {
      title: "跨境电商财税合规",
      description: "全面掌握跨境电商的财税政策和合规要求",
      duration: "40课时",
      level: "初级-中级"
    },
    {
      title: "企业股权设计与激励",
      description: "学习现代企业股权结构设计和员工激励机制",
      duration: "32课时",
      level: "中级-高级"
    },
    {
      title: "绩效管理体系建设",
      description: "构建科学有效的企业绩效管理体系",
      duration: "24课时",
      level: "中级"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="w-full px-1 sm:px-2 lg:px-3">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">课程培训</h1>
          <p className="text-xl text-gray-600">提升财税专业技能，助力企业发展</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">{course.title}</h3>
              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-2">关键词：{course.keywords}</p>
                <p className="text-gray-600">{course.description}</p>
              </div>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <div className="flex items-center">
                  <span className="font-medium text-gray-700">课程形式：</span>
                  <span className="ml-2">{course.duration}</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium text-gray-700">{course.level}</span>
                </div>
              </div>
              <button className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                了解详情
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// 课程培训页面
function CoursesPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [loadedImages, setLoadedImages] = useState(new Set());
  
   const courses = [
    {
      title: "跨境电商中小企业一般财税合规",
      description: "财税合规、资金、架构、报关模式、出口退税、税务",
      duration: "线上+线下（1天课程）",
      level: "适用人群：跨境卖家、股东合伙人、财务",
      keywords: "财税合规、资金、架构、报关模式、出口退税、税务"
    },
    {
      title: "跨境电商财税+股权+绩效管理",
      description: "财税合规、财务思维、股权设计、股权激励、企业绩效管理",
      duration: "线下（2天1夜课程）",
      level: "适用人群：企业老板、股东合伙人、财务总监",
      keywords: "财税合规、财务思维、股权设计、股权激励、企业绩效管理"
    },
    {
      title: "跨境电商财税+股权+阿米巴",
      description: "老板财税、财务思维、股权设计、股权激励、阿米巴经营",
      duration: "线下（2天课程）",
      level: "适用人群：企业老板、股东合伙人、财务总监",
      keywords: "老板财税、财务思维、股权设计、股权激励、阿米巴经营"
    },
    {
      title: "跨境电商供应链及现金流管理",
      description: "供应链管理、库存管理、物流管理、质量管理、产品开发、现金流管理",
      duration: "线下（2天课程）",
      level: "适用人群：企业老板、股东CEO、财务总监",
      keywords: "供应链管理、库存管理、物流管理、质量管理、产品开发、现金流管理"
    }
  ];
  
  // 往期课程回顾图片
  const courseImages = [
    "/照片/微信图片_20250724150758.jpg",
    "/照片/微信图片_20250724150824.jpg",
    "/照片/微信图片_20250724151113.jpg",
    "/照片/微信图片_20250724151123.jpg",
    "/照片/微信图片_20250724151131.jpg",
    "/照片/微信图片_20250729105910.jpg",
    "/照片/微信图片_20250729105919.png",
    "/照片/微信图片_20250729110125.png",
    "/照片/微信图片_20250729110145.jpg",
    "/照片/微信图片_20250729110148.jpg"
  ];
  
  // 预加载图片
  const preloadImage = (src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        setLoadedImages(prev => new Set([...prev, src]));
        resolve(img);
      };
      img.onerror = reject;
      img.src = src;
    });
  };
  
  // 预加载相邻图片
  useEffect(() => {
    const preloadAdjacentImages = () => {
      const prevIndex = (currentImageIndex - 1 + courseImages.length) % courseImages.length;
      const nextIndex = (currentImageIndex + 1) % courseImages.length;
      
      [courseImages[currentImageIndex], courseImages[prevIndex], courseImages[nextIndex]].forEach(src => {
        if (!loadedImages.has(src)) {
          preloadImage(src).catch(() => {});
        }
      });
    };
    
    preloadAdjacentImages();
  }, [currentImageIndex, courseImages, loadedImages]);
  
  // 键盘导航支持
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (isTransitioning) return;
      
      if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      }
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isTransitioning]);
  
  // 自动轮播（可选）
  useEffect(() => {
    const autoPlay = setInterval(() => {
      if (!isTransitioning) {
        nextImage();
      }
    }, 5000); // 5秒自动切换
    
    return () => clearInterval(autoPlay);
  }, [currentImageIndex, isTransitioning]);
  
  const nextImage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentImageIndex((prev) => (prev + 1) % courseImages.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };
  
  const prevImage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentImageIndex((prev) => (prev - 1 + courseImages.length) % courseImages.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="w-full px-1 sm:px-2 lg:px-3">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">课程培训</h1>
          <p className="text-xl text-gray-600">提升财税专业技能，助力企业发展</p>
        </div>
        
        <div className="space-y-6">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-3">{course.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {course.keywords.split('、').map((keyword, keyIndex) => (
                      <span key={keyIndex} className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full">
                        {keyword}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row sm:gap-6 text-sm text-gray-500">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      课时：{course.duration}
                    </span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      {course.level}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* 往期课程回顾板块 */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">往期课程回顾</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 overflow-hidden">
            {/* 图片轮播容器 */}
            <div className="relative max-w-4xl mx-auto">
              <div className="relative aspect-video bg-white rounded-xl shadow-lg overflow-hidden">
                {/* 当前图片 */}
                <div className={`absolute inset-0 transition-all duration-300 ease-in-out ${
                  isTransitioning ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
                }`}>
                  <img 
                    src={courseImages[currentImageIndex]} 
                    alt={`往期课程回顾 ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                    style={{
                      filter: loadedImages.has(courseImages[currentImageIndex]) ? 'none' : 'blur(2px)',
                      transition: 'filter 0.3s ease-in-out'
                    }}
                    onLoad={() => {
                      setLoadedImages(prev => new Set([...prev, courseImages[currentImageIndex]]));
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  {/* 加载指示器 */}
                  {!loadedImages.has(courseImages[currentImageIndex]) && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                    </div>
                  )}
                </div>
                
                {/* 左右切换按钮 */}
                <button 
                  onClick={prevImage}
                  disabled={isTransitioning}
                  className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                    isTransitioning ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
                  }`}
                >
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button 
                  onClick={nextImage}
                  disabled={isTransitioning}
                  className={`absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                    isTransitioning ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
                  }`}
                >
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              {/* 图片指示器 */}
              <div className="flex justify-center mt-6 space-x-2">
                {courseImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (!isTransitioning && index !== currentImageIndex) {
                        setIsTransitioning(true);
                        setCurrentImageIndex(index);
                        setTimeout(() => setIsTransitioning(false), 300);
                      }
                    }}
                    disabled={isTransitioning}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'bg-blue-600 scale-125' 
                        : isTransitioning 
                          ? 'bg-blue-200 cursor-not-allowed'
                          : 'bg-blue-300 hover:bg-blue-400 hover:scale-110'
                    }`}
                  />
                ))}
              </div>
              
              {/* 图片计数器 */}
              <div className="text-center mt-4">
                <span className="text-blue-600 font-medium">
                  {currentImageIndex + 1} / {courseImages.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



// 资讯动态页面
function NewsPage() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  
  const newsItems = [
    {
      id: 1,
      title: "15号+17号公告打造'数据管税'监管闭环，跨境电商进入'合规为王'时代",
      summary: "税务总局发布重要公告，构建数据管税新体系。跨境电商企业需要深入理解新规要求，确保业务合规发展。",
      date: "2025年7月25日",
      image: "https://mmbiz.qpic.cn/sz_mmbiz_jpg/Wh8ibjdRmSUSEH9wIttQewPFibPK9ia2lrKTQfSgO4wnusFrSNLOWsePNgiapsZRXicRoWxM5O7J08GjbL7ZSOiaibOVw/0?wx_fmt=jpeg",
      link: "https://mp.weixin.qq.com/s/Ze9n3gpAwAVSnU1adXhl7A",
      content: `<div style="max-width: 800px; margin: 0 auto; padding: 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333;">
        <h1 style="font-size: 24px; font-weight: bold; margin-bottom: 20px; color: #1a1a1a;">新规政策下，跨境电商到底如何做财税合规？</h1>
        
        <div style="margin-bottom: 20px; padding: 15px; background-color: #f8f9fa; border-left: 4px solid #007bff; border-radius: 4px;">
          <p style="margin: 0; font-weight: 600; color: #495057;">跨境电商财税合规新挑战：如何在政策变化中稳健前行？</p>
        </div>
        
        <p style="margin-bottom: 16px;">随着跨境电商行业的蓬勃发展，财税合规已成为企业可持续发展的关键因素。近期，税务部门频频出台新规，从<strong>金税四期</strong>到<strong>数据管税</strong>，再到最新的跨境电商税收政策调整，每一项变化都牵动着千万跨境卖家的神经。</p>
        
        <h2 style="font-size: 20px; font-weight: bold; margin: 24px 0 16px 0; color: #1a1a1a;">一、新政策环境下的合规挑战</h2>
        
        <p style="margin-bottom: 16px;">2024年以来，跨境电商税收监管呈现出以下几个显著特点：</p>
        
        <ul style="margin-bottom: 16px; padding-left: 20px;">
          <li style="margin-bottom: 8px;"><strong>监管精准化：</strong>通过大数据分析，税务部门能够精准识别异常交易</li>
          <li style="margin-bottom: 8px;"><strong>处罚严厉化：</strong>对违规行为的处罚力度明显加大</li>
          <li style="margin-bottom: 8px;"><strong>合规常态化：</strong>从事后稽查转向事前预防和实时监控</li>
        </ul>
        
        <h2 style="font-size: 20px; font-weight: bold; margin: 24px 0 16px 0; color: #1a1a1a;">二、财税合规核心要点</h2>
        
        <div style="background-color: #fff3cd; border: 1px solid #ffeaa7; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
          <h3 style="font-size: 16px; font-weight: bold; margin-bottom: 12px; color: #856404;">1. 增值税合规</h3>
          <p style="margin-bottom: 8px; color: #856404;">• 准确区分境内外销售行为</p>
          <p style="margin-bottom: 8px; color: #856404;">• 正确适用增值税税率和征收率</p>
          <p style="margin-bottom: 0; color: #856404;">• 规范开具和取得增值税发票</p>
        </div>
        
        <div style="background-color: #d1ecf1; border: 1px solid #bee5eb; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
          <h3 style="font-size: 16px; font-weight: bold; margin-bottom: 12px; color: #0c5460;">2. 企业所得税合规</h3>
          <p style="margin-bottom: 8px; color: #0c5460;">• 合理确定收入确认时点</p>
          <p style="margin-bottom: 8px; color: #0c5460;">• 准确计算应纳税所得额</p>
          <p style="margin-bottom: 0; color: #0c5460;">• 充分利用税收优惠政策</p>
        </div>
        
        <h2 style="font-size: 20px; font-weight: bold; margin: 24px 0 16px 0; color: #1a1a1a;">三、实务操作建议</h2>
        
        <ol style="margin-bottom: 16px; padding-left: 20px;">
          <li style="margin-bottom: 12px;"><strong>建立完善的财务制度：</strong>制定符合跨境电商特点的财务管理制度</li>
          <li style="margin-bottom: 12px;"><strong>加强内部控制：</strong>建立有效的内控体系，防范税务风险</li>
          <li style="margin-bottom: 12px;"><strong>定期自查自纠：</strong>建立定期税务自查机制，及时发现和纠正问题</li>
          <li style="margin-bottom: 12px;"><strong>寻求专业支持：</strong>与专业税务机构合作，获得专业指导</li>
        </ol>
        
        <div style="background-color: #f8f9fa; border-radius: 8px; padding: 20px; margin-top: 24px; text-align: center;">
          <p style="margin: 0; font-style: italic; color: #6c757d;">合规不是负担，而是企业可持续发展的基石。在新政策环境下，只有做好财税合规，企业才能在激烈的市场竞争中立于不败之地。</p>
        </div>
      </div>`
    },
    {
      id: 2,
      title: "新规政策下，跨境电商到底如何做财税合规？",
      summary: "随着跨境电商行业的快速发展，财税合规成为企业关注的重点。本文详细解析最新政策要求，为企业提供实用的合规指导。",
      date: "2025年7月22日",
      image: "https://mmbiz.qpic.cn/sz_mmbiz_jpg/Wh8ibjdRmSUTsWduicNtTOibTguicoJM3oRRsHd6L1kVhu5QKNLjtJOGg47yZIT3yU0APvGahcc9ViajhT5oltzuccg/0?wx_fmt=jpeg",
      link: "https://mp.weixin.qq.com/s/We7LFRLxCHTEYggOVUvhCQ",
      content: `<div style="max-width: 800px; margin: 0 auto; padding: 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333;">
        <h1 style="font-size: 24px; font-weight: bold; margin-bottom: 20px; color: #1a1a1a;">15号+17号公告打造"数据管税"监管闭环，跨境电商进入"合规为王"时代</h1>
        
        <div style="margin-bottom: 20px; padding: 15px; background-color: #f8f9fa; border-left: 4px solid #007bff; border-radius: 4px;">
          <p style="margin: 0; font-weight: 600; color: #495057;">数据管税新时代：跨境电商如何应对监管升级？</p>
        </div>
        
        <p style="margin-bottom: 16px;">2024年，税务总局连续发布15号和17号公告，标志着我国税收征管正式进入<strong>"数据管税"</strong>新时代。这两个重磅文件的出台，不仅完善了税收数据采集体系，更是构建了从数据收集到风险识别的完整监管闭环，对跨境电商行业产生了深远影响。</p>
        
        <h2 style="font-size: 20px; font-weight: bold; margin: 24px 0 16px 0; color: #1a1a1a;">一、15号公告：数据采集全覆盖</h2>
        
        <div style="background-color: #e7f3ff; border: 1px solid #b3d9ff; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
          <h3 style="font-size: 16px; font-weight: bold; margin-bottom: 12px; color: #0056b3;">核心内容解读</h3>
          <ul style="margin: 0; padding-left: 20px; color: #0056b3;">
            <li style="margin-bottom: 8px;">扩大数据采集范围，涵盖电商平台、支付机构、物流企业</li>
            <li style="margin-bottom: 8px;">建立实时数据传输机制，提高监管时效性</li>
            <li style="margin-bottom: 8px;">完善数据标准化要求，确保信息准确性</li>
            <li style="margin-bottom: 0;">强化数据安全保护，保障纳税人隐私</li>
          </ul>
        </div>
        
        <h2 style="font-size: 20px; font-weight: bold; margin: 24px 0 16px 0; color: #1a1a1a;">二、17号公告：风险识别智能化</h2>
        
        <p style="margin-bottom: 16px;">17号公告在15号公告基础上，进一步完善了风险识别和应对机制：</p>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px;">
          <div style="background-color: #fff3cd; border: 1px solid #ffeaa7; border-radius: 8px; padding: 16px;">
            <h4 style="font-size: 14px; font-weight: bold; margin-bottom: 8px; color: #856404;">智能分析</h4>
            <p style="margin: 0; font-size: 14px; color: #856404;">运用大数据和人工智能技术，自动识别异常交易模式</p>
          </div>
          <div style="background-color: #d1ecf1; border: 1px solid #bee5eb; border-radius: 8px; padding: 16px;">
            <h4 style="font-size: 14px; font-weight: bold; margin-bottom: 8px; color: #0c5460;">精准画像</h4>
            <p style="margin: 0; font-size: 14px; color: #0c5460;">构建纳税人风险画像，实现个性化监管</p>
          </div>
        </div>
        
        <h2 style="font-size: 20px; font-weight: bold; margin: 24px 0 16px 0; color: #1a1a1a;">三、对跨境电商的影响</h2>
        
        <div style="background-color: #f8d7da; border: 1px solid #f5c6cb; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
          <h3 style="font-size: 16px; font-weight: bold; margin-bottom: 12px; color: #721c24;">监管升级带来的挑战</h3>
          <ol style="margin: 0; padding-left: 20px; color: #721c24;">
            <li style="margin-bottom: 8px;"><strong>数据透明度要求提高：</strong>所有交易数据将被实时监控</li>
            <li style="margin-bottom: 8px;"><strong>合规成本增加：</strong>需要投入更多资源确保合规</li>
            <li style="margin-bottom: 8px;"><strong>风险识别更精准：</strong>任何异常都可能被快速发现</li>
            <li style="margin-bottom: 0;"><strong>处罚力度加大：</strong>违规成本显著提升</li>
          </ol>
        </div>
        
        <h2 style="font-size: 20px; font-weight: bold; margin: 24px 0 16px 0; color: #1a1a1a;">四、企业应对策略</h2>
        
        <div style="background-color: #d4edda; border: 1px solid #c3e6cb; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
          <h3 style="font-size: 16px; font-weight: bold; margin-bottom: 12px; color: #155724;">合规为王的实施路径</h3>
          
          <div style="margin-bottom: 16px;">
            <h4 style="font-size: 14px; font-weight: bold; margin-bottom: 8px; color: #155724;">1. 完善内控体系</h4>
            <p style="margin-bottom: 8px; font-size: 14px; color: #155724;">• 建立健全财务管理制度</p>
            <p style="margin-bottom: 8px; font-size: 14px; color: #155724;">• 加强业务流程标准化</p>
            <p style="margin-bottom: 12px; font-size: 14px; color: #155724;">• 提升数据质量管理水平</p>
          </div>
          
          <div style="margin-bottom: 16px;">
            <h4 style="font-size: 14px; font-weight: bold; margin-bottom: 8px; color: #155724;">2. 强化技术支撑</h4>
            <p style="margin-bottom: 8px; font-size: 14px; color: #155724;">• 升级财务管理系统</p>
            <p style="margin-bottom: 8px; font-size: 14px; color: #155724;">• 建立数据自动化处理机制</p>
            <p style="margin-bottom: 12px; font-size: 14px; color: #155724;">• 实现业财一体化管理</p>
          </div>
          
          <div>
            <h4 style="font-size: 14px; font-weight: bold; margin-bottom: 8px; color: #155724;">3. 寻求专业支持</h4>
            <p style="margin-bottom: 8px; font-size: 14px; color: #155724;">• 与专业税务机构合作</p>
            <p style="margin-bottom: 8px; font-size: 14px; color: #155724;">• 定期进行合规体检</p>
            <p style="margin-bottom: 0; font-size: 14px; color: #155724;">• 及时获取政策解读</p>
          </div>
        </div>
        
        <div style="background-color: #f8f9fa; border-radius: 8px; padding: 20px; margin-top: 24px; text-align: center;">
          <p style="margin: 0; font-style: italic; color: #6c757d; font-size: 16px;">"数据管税"时代已经到来，跨境电商企业必须主动拥抱变化，将合规作为企业发展的核心竞争力。只有这样，才能在新的监管环境下实现可持续发展。</p>
        </div>
      </div>`
    },
    {
      id: 3,
      title: "税务风险提示函应对指南：三步自查法与企业合规要点",
      summary: "企业收到税务风险提示函后如何应对？本文提供详细的应对策略和自查方法，帮助企业化解税务风险。",
      date: "2025年7月17日",
      image: "https://mmbiz.qpic.cn/mmbiz_jpg/L6K3iaINbsicWSUKx0JbibibrtibwpwSuCR1gBdibgQDRJgzN2sBqHvJDynBoavA8oCupn3eQdRtwaHqcP0NA6O6x4MA/0?wx_fmt=jpeg",
      link: "https://mp.weixin.qq.com/s/l4VFjaHTmhUPPmvSxr1NbA",
      content: `<div style="max-width: 800px; margin: 0 auto; padding: 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333;">
        <h1 style="font-size: 24px; font-weight: bold; margin-bottom: 20px; color: #1a1a1a;">税务风险提示函应对指南：三步自查法与企业合规要点</h1>
        
        <div style="margin-bottom: 20px; padding: 15px; background-color: #f8f9fa; border-left: 4px solid #007bff; border-radius: 4px;">
          <p style="margin: 0; font-weight: 600; color: #495057;">税务风险提示函来袭！企业如何化解危机守住合规底线？</p>
        </div>
        
        <p style="margin-bottom: 16px;">近日，多家企业财务负责人的电子税务局账户中悄然出现《纳税风险提醒函》，这一由税务部门推送的蓝色提示标志，在财税圈引发了广泛关注。随着<strong>金税四期</strong>系统的深入推进，税收风险提示已成为<strong>税务部门实施"放管服"改革</strong>的重要工具——它既是预警，也是企业自查自纠的宝贵窗口。</p>
        
        <h2 style="font-size: 20px; font-weight: bold; margin: 24px 0 16px 0; color: #1a1a1a;">一、风险提示函：不是稽查令，而是警示灯</h2>
        
        <p style="margin-bottom: 16px;">当企业收到税务风险提示函时，往往第一反应是紧张甚至恐慌。但事实上，这恰恰说明企业<strong>尚未进入高风险纳税人名单</strong>。根据税务机关风险应对规则，对<strong>非高风险纳税人</strong>才会采取提示提醒方式，而非直接启动稽查程序。</p>
        
        <div style="background-color: #e7f3ff; border: 1px solid #b3d9ff; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
          <h3 style="font-size: 16px; font-weight: bold; margin-bottom: 12px; color: #0056b3;">风险提示函的本质</h3>
          <p style="margin-bottom: 12px; color: #0056b3;">税务机关通过<strong>税收大数据</strong>分析，将企业纳税申报表、财务报表与行业数据、历史数据进行比对后发现的异常指标推送。其核心目的在于：</p>
          <ul style="margin: 0; padding-left: 20px; color: #0056b3;">
            <li style="margin-bottom: 8px;">帮助企业自主排查涉税风险</li>
            <li style="margin-bottom: 8px;">降低征纳双方成本</li>
            <li style="margin-bottom: 0;">引导企业主动纠错</li>
          </ul>
        </div>
        
        <h2 style="font-size: 20px; font-weight: bold; margin: 24px 0 16px 0; color: #1a1a1a;">二、哪些企业最易"中招"？六大高频风险场景</h2>
        
        <p style="margin-bottom: 16px;">根据多地税务机关公布的案例，以下情形最易触发风险提示：</p>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px;">
          <div style="background-color: #fff3cd; border: 1px solid #ffeaa7; border-radius: 8px; padding: 16px;">
            <h4 style="font-size: 14px; font-weight: bold; margin-bottom: 8px; color: #856404;">增值税申报异常</h4>
            <ul style="margin: 0; padding-left: 16px; font-size: 13px; color: #856404;">
              <li style="margin-bottom: 4px;">小规模纳税人销售额达标却未办理一般纳税人登记</li>
              <li style="margin-bottom: 4px;">免税收入与应税收入未分别核算</li>
              <li style="margin-bottom: 0;">财政补贴收入未按规定计算缴纳增值税</li>
            </ul>
          </div>
          
          <div style="background-color: #d1ecf1; border: 1px solid #bee5eb; border-radius: 8px; padding: 16px;">
            <h4 style="font-size: 14px; font-weight: bold; margin-bottom: 8px; color: #0c5460;">跨税种数据矛盾</h4>
            <ul style="margin: 0; padding-left: 16px; font-size: 13px; color: #0c5460;">
              <li style="margin-bottom: 4px;">增值税申报收入与企业所得税申报收入差异过大</li>
              <li style="margin-bottom: 4px;">消费税申报收入小于增值税申报收入</li>
              <li style="margin-bottom: 0;">出口货物报关数据与退税申报不一致</li>
            </ul>
          </div>
          
          <div style="background-color: #f8d7da; border: 1px solid #f5c6cb; border-radius: 8px; padding: 16px;">
            <h4 style="font-size: 14px; font-weight: bold; margin-bottom: 8px; color: #721c24;">税前扣除凭证缺失</h4>
            <ul style="margin: 0; padding-left: 16px; font-size: 13px; color: #721c24;">
              <li style="margin-bottom: 4px;">研发费用加计扣除中材料占比超过70%且无合理解释</li>
              <li style="margin-bottom: 4px;">大额费用支出缺乏有效凭证</li>
              <li style="margin-bottom: 0;">关联交易定价明显偏离市场价格</li>
            </ul>
          </div>
          
          <div style="background-color: #d4edda; border: 1px solid #c3e6cb; border-radius: 8px; padding: 16px;">
            <h4 style="font-size: 14px; font-weight: bold; margin-bottom: 8px; color: #155724;">财务数据异常</h4>
            <ul style="margin: 0; padding-left: 16px; font-size: 13px; color: #155724;">
              <li style="margin-bottom: 4px;">毛利率与行业平均水平差异显著</li>
              <li style="margin-bottom: 4px;">成本费用率异常波动</li>
              <li style="margin-bottom: 0;">资产负债结构不合理</li>
            </ul>
          </div>
        </div>
        
        <h2 style="font-size: 20px; font-weight: bold; margin: 24px 0 16px 0; color: #1a1a1a;">三、三步自查法：化解风险的黄金法则</h2>
        
        <div style="background-color: #e7f3ff; border: 1px solid #b3d9ff; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
          <h3 style="font-size: 18px; font-weight: bold; margin-bottom: 16px; color: #0056b3; text-align: center;">第一步：快速响应（收到提示函后24小时内）</h3>
          
          <div style="margin-bottom: 16px;">
            <h4 style="font-size: 14px; font-weight: bold; margin-bottom: 8px; color: #0056b3;">立即行动清单：</h4>
            <ul style="margin: 0; padding-left: 20px; color: #0056b3;">
              <li style="margin-bottom: 6px;">仔细阅读提示函内容，明确风险点</li>
              <li style="margin-bottom: 6px;">组织财务、税务、业务部门联合会议</li>
              <li style="margin-bottom: 6px;">制定初步应对方案和时间表</li>
              <li style="margin-bottom: 0;">必要时联系专业税务顾问</li>
            </ul>
          </div>
        </div>
        
        <div style="background-color: #fff3cd; border: 1px solid #ffeaa7; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
          <h3 style="font-size: 18px; font-weight: bold; margin-bottom: 16px; color: #856404; text-align: center;">第二步：深度自查（3-7个工作日）</h3>
          
          <div style="margin-bottom: 16px;">
            <h4 style="font-size: 14px; font-weight: bold; margin-bottom: 8px; color: #856404;">系统性排查要点：</h4>
            <ol style="margin: 0; padding-left: 20px; color: #856404;">
              <li style="margin-bottom: 8px;"><strong>数据核对：</strong>逐项核对申报数据与账务数据的一致性</li>
              <li style="margin-bottom: 8px;"><strong>政策适用：</strong>检查税收政策适用是否准确</li>
              <li style="margin-bottom: 8px;"><strong>凭证完整性：</strong>确保所有税前扣除项目有合法凭证</li>
              <li style="margin-bottom: 8px;"><strong>计算准确性：</strong>重新计算各项税费</li>
              <li style="margin-bottom: 0;"><strong>时间节点：</strong>确认各项业务的税务处理时点</li>
            </ol>
          </div>
        </div>
        
        <div style="background-color: #d4edda; border: 1px solid #c3e6cb; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
          <h3 style="font-size: 18px; font-weight: bold; margin-bottom: 16px; color: #155724; text-align: center;">第三步：规范整改（7-15个工作日）</h3>
          
          <div style="margin-bottom: 16px;">
            <h4 style="font-size: 14px; font-weight: bold; margin-bottom: 8px; color: #155724;">整改实施路径：</h4>
            <ul style="margin: 0; padding-left: 20px; color: #155724;">
              <li style="margin-bottom: 8px;"><strong>补正申报：</strong>发现错误及时进行更正申报</li>
              <li style="margin-bottom: 8px;"><strong>补缴税款：</strong>主动补缴应缴未缴税款及滞纳金</li>
              <li style="margin-bottom: 8px;"><strong>完善制度：</strong>建立健全内控制度，防范类似风险</li>
              <li style="margin-bottom: 8px;"><strong>培训提升：</strong>加强财税人员专业培训</li>
              <li style="margin-bottom: 0;"><strong>书面回复：</strong>向税务机关提交整改情况说明</li>
            </ul>
          </div>
        </div>
        
        <h2 style="font-size: 20px; font-weight: bold; margin: 24px 0 16px 0; color: #1a1a1a;">四、企业合规要点：构建长效机制</h2>
        
        <div style="background-color: #f8f9fa; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
          <h3 style="font-size: 16px; font-weight: bold; margin-bottom: 12px; color: #495057;">建立"四位一体"合规体系</h3>
          
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
            <div>
              <h4 style="font-size: 14px; font-weight: bold; margin-bottom: 8px; color: #495057;">制度建设</h4>
              <p style="margin-bottom: 8px; font-size: 13px; color: #6c757d;">• 完善财务管理制度</p>
              <p style="margin-bottom: 8px; font-size: 13px; color: #6c757d;">• 建立税务风险管理制度</p>
              <p style="margin-bottom: 12px; font-size: 13px; color: #6c757d;">• 制定内控操作规程</p>
            </div>
            
            <div>
              <h4 style="font-size: 14px; font-weight: bold; margin-bottom: 8px; color: #495057;">人员培训</h4>
              <p style="margin-bottom: 8px; font-size: 13px; color: #6c757d;">• 定期开展税法培训</p>
              <p style="margin-bottom: 8px; font-size: 13px; color: #6c757d;">• 提升财税人员专业素养</p>
              <p style="margin-bottom: 12px; font-size: 13px; color: #6c757d;">• 建立学习考核机制</p>
            </div>
            
            <div>
              <h4 style="font-size: 14px; font-weight: bold; margin-bottom: 8px; color: #495057;">技术支撑</h4>
              <p style="margin-bottom: 8px; font-size: 13px; color: #6c757d;">• 升级财务管理系统</p>
              <p style="margin-bottom: 8px; font-size: 13px; color: #6c757d;">• 建立数据质量控制机制</p>
              <p style="margin-bottom: 12px; font-size: 13px; color: #6c757d;">• 实现业财税一体化</p>
            </div>
            
            <div>
              <h4 style="font-size: 14px; font-weight: bold; margin-bottom: 8px; color: #495057;">外部支持</h4>
              <p style="margin-bottom: 8px; font-size: 13px; color: #6c757d;">• 聘请专业税务顾问</p>
              <p style="margin-bottom: 8px; font-size: 13px; color: #6c757d;">• 定期进行合规体检</p>
              <p style="margin-bottom: 0; font-size: 13px; color: #6c757d;">• 及时获取政策解读</p>
            </div>
          </div>
        </div>
        
        <div style="background-color: #f8f9fa; border-radius: 8px; padding: 20px; margin-top: 24px; text-align: center;">
          <p style="margin: 0; font-style: italic; color: #6c757d; font-size: 16px;">税务风险提示函不是"洪水猛兽"，而是税务机关给予企业的"免费体检"。企业应当珍惜这一机会，通过系统性自查和规范化整改，不断提升税务合规水平，实现可持续发展。</p>
        </div>
      </div>`
    }
  ]

  if (selectedArticle) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <button 
              onClick={() => setSelectedArticle(null)}
              className="inline-flex items-center px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors duration-200"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              返回列表
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div 
              className="article-content"
              dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="w-full px-2 sm:px-4 lg:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">资讯动态</h1>
          <p className="text-xl text-gray-600">最新的财税政策解读与实务指导</p>
        </div>

        <div className="space-y-6">
          {newsItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="p-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.summary}</p>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    发布时间：{item.date}
                  </span>
                  <button 
                    onClick={() => setSelectedArticle(item)}
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors cursor-pointer inline-block"
                  >
                    查看详情 →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </div>
  )
}

function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="w-full px-1 sm:px-2 lg:px-3">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">联系我们</h1>
          <p className="text-xl text-gray-600">我们随时为您提供专业的服务</p>
        </div>
        
        <div className="flex justify-center">
          {/* 联系信息 */}
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
            <h2 className="text-2xl font-bold mb-6 text-center">联系信息</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-primary-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <h3 className="font-semibold">办公地址</h3>
                  <p className="text-gray-600">深圳市龙华区龙华街道三联社区富泉新村北区23号610</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="w-6 h-6 text-primary-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <h3 className="font-semibold">客服微信</h3>
                  <p className="text-gray-600">HT_4706</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="w-6 h-6 text-primary-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <h3 className="font-semibold">电子邮箱</h3>
                  <p className="text-gray-600">ht00214706@163.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// 页脚组件
function Footer() {
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [modalTitle, setModalTitle] = useState('');

  const handleSocialClick = (platform) => {
    let imagePath = '';
    let title = '';
    
    switch(platform) {
      case 'wechat':
        imagePath = '/公众号.jpg';
        title = '微信公众号';
        break;
      case 'douyin':
        imagePath = '/抖音.jpg';
        title = '抖音';
        break;
      case 'xiaohongshu':
        imagePath = '/小红书.jpg';
        title = '小红书';
        break;
      default:
        return;
    }
    
    setModalImage(imagePath);
    setModalTitle(title);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalImage('');
    setModalTitle('');
  };

  return (
    <>
      <footer className="bg-gray-900 text-white">
        <div className="w-full px-1 sm:px-2 lg:px-3 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">海通财务</h3>
              <p className="text-gray-400 mb-4">
                专业的跨境财税合规服务商，为您的财富保驾护航。
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">服务项目</h4>
              <ul className="space-y-2 text-gray-400">
                <li>合规会计外包</li>
                <li>财税顾问指导</li>
                <li>出口退税办理</li>
                <li>财税课程学习</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">联系方式</h4>
              <ul className="space-y-2 text-gray-400">
                <li>客服微信：HT_4706</li>
                <li>邮箱：ht00214706@163.com</li>
                <li>深圳市龙华区龙华街道三联社区富泉新村北区23号610</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">关注我们</h4>
              <div className="flex space-x-4">
                <button 
                  onClick={() => handleSocialClick('wechat')}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  微信公众号
                </button>
                <button 
                  onClick={() => handleSocialClick('douyin')}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  抖音
                </button>
                <button 
                  onClick={() => handleSocialClick('xiaohongshu')}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  小红书
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 海通财务. 保留所有权利.</p>
          </div>
        </div>
      </footer>

      {/* 社交媒体图片模态框 */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50" onClick={closeModal}>
          <div className="relative max-w-4xl max-h-[90vh] p-4">
            <button
              onClick={closeModal}
              className="absolute -top-10 right-0 text-gray-800 bg-white rounded-full w-8 h-8 flex items-center justify-center text-xl hover:bg-gray-100 transition-colors shadow-lg"
            >
              ×
            </button>
            <div className="bg-white rounded-lg p-4 shadow-2xl">
              <h3 className="text-xl font-semibold mb-4 text-center text-gray-900">{modalTitle}</h3>
              <img 
                src={modalImage} 
                alt={modalTitle}
                className="max-w-full max-h-[70vh] object-contain mx-auto rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

// 微信二维码组件
function WeChatQRCode() {
  const [isVisible, setIsVisible] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClose = () => {
    setIsVisible(false);
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {/* 二维码容器 */}
        <div className={`bg-white rounded-lg shadow-lg transition-all duration-300 ${isExpanded ? 'p-4' : 'p-2'}`}>
          {/* 关闭按钮 */}
          <button
            onClick={handleClose}
            className="absolute -top-2 -right-2 bg-gray-500 hover:bg-gray-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs transition-colors duration-200 z-10"
          >
            ×
          </button>
          
          {/* 二维码图片 */}
          <div className="text-center">
            <img 
              src="/WechatIMG48.jpg" 
              alt="微信二维码" 
              className={`transition-all duration-300 cursor-pointer ${isExpanded ? 'w-32 h-32' : 'w-16 h-16'} mx-auto rounded-lg`}
              onClick={toggleExpanded}
            />
            
            {/* 提示文字 */}
            <div className={`mt-2 transition-all duration-300 ${isExpanded ? 'opacity-100' : 'opacity-80'}`}>
              <p className="text-gray-700 text-sm font-medium">微信扫码咨询</p>
              {isExpanded && (
                <p className="text-gray-500 text-xs mt-1">专业跨境财税合规服务</p>
              )}
            </div>
          </div>
        </div>
        
        {/* 悬浮提示 */}
        {!isExpanded && (
          <div className="absolute bottom-full right-0 mb-2 bg-gray-800 text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            点击查看大图
          </div>
        )}
      </div>
    </div>
  );
}

// 主应用组件
function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />
      case 'about':
        return <AboutPage />
      case 'courses':
        return <CoursesPage />
      case 'news':
        return <NewsPage />
      case 'contact':
        return <ContactPage />
      default:
        return <HomePage setCurrentPage={setCurrentPage} />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
      <WeChatQRCode />
    </div>
  )
}

export default App
