import React from 'react';
import Button from '../components/Button';
import Layout from '../components/Layout';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';

export default () => (
  <Layout>
    <section className="pt-20 md:pt-40 text-gray-900">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-6xl font-bold leading-none">
            Content analytics you'll enjoy using
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            Quickly understand what content drives business impact with Parse.ly
          </p>
          <p className="mt-8 md:mt-12">
            <Button size="lg">Get Started</Button>
          </p>
          <p className="mt-4 text-gray-600">No credit card required</p>
          <p className="mt-4">
            <a href="https://codebushi.com" className="font-semibold">
              Or talk to a content analytics expert
            </a>
          </p>
        </div>
        <div className="lg:w-1/2">
          <HeroImage />
        </div>
      </div>
    </section>
    <section className="py-20 lg:py-40">
      <div className="container mx-auto text-center">
        <p className="text-sm uppercase tracking-wider">Our customers get results</p>
        <div className="flex mt-8 lg:px-24">
          <div className="w-1/3">
            <p className="text-4xl lg:text-6xl font-semibold text-primary">+400%</p>
            <p className="font-semibold">daily newsletter subscribers</p>
          </div>
          <div className="w-1/3">
            <p className="text-4xl lg:text-6xl font-semibold text-primary">+105%</p>
            <p className="font-semibold">paying subscribers</p>
          </div>
          <div className="w-1/3">
            <p className="text-4xl lg:text-6xl font-semibold text-primary">+65%</p>
            <p className="font-semibold">page views</p>
          </div>
        </div>
      </div>
    </section>
    <section className="mt-10 mb-24 text-center">
      <h2 className="text-3xl lg:text-5xl font-semibold">Use Parse.ly to win with content</h2>
    </section>
    <section className="py-20">
      <div className="container mx-auto px-16 items-center flex flex-col lg:flex-row">
        <div className="lg:pr-32 xl:pr-48 lg:w-1/2">
          <h3 className="text-3xl font-semibold leading-tight">Measure content performance</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Make data-driven decisions with democratized access to content data. Use
            easy-to-understand content analytics, charts, and graphs
          </p>
        </div>
        <div className="mt-10 lg:mt-0 w-full lg:w-1/2">
          <SvgCharts />
        </div>
      </div>
    </section>
    <section className="py-20">
      <div className="container mx-auto px-16 items-center flex flex-col lg:flex-row">
        <div className="order-last lg:order-first mt-10 lg:mt-0 w-full lg:w-1/2">
          <SvgCharts />
        </div>
        <div className="lg:pl-32 xl:pl-48 lg:w-1/2">
          <h3 className="text-3xl font-semibold leading-tight">
            Understand reader engagement and behavior
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Understand what's resonating with readers in real-time, or analyze historical trends
            across audience segments to discover new opportunities.
          </p>
        </div>
      </div>
    </section>
    <section className="py-20">
      <div className="container mx-auto px-16 items-center flex flex-col lg:flex-row">
        <div className="lg:pr-32 xl:pr-48 lg:w-1/2">
          <h3 className="text-3xl font-semibold leading-tight">Grow your business</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Improve key metrics like engagement, conversion, and retention to drive revenue and
            impact. Double down on what works and meet your goals.
          </p>
        </div>
        <div className="mt-10 lg:mt-0 w-full lg:w-1/2">
          <SvgCharts />
        </div>
      </div>
    </section>
  </Layout>
);
