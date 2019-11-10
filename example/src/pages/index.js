import React from 'react';
import Button from '../components/Button';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';

export default () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
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
        <LabelText>Our customers get results</LabelText>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+400%" secondaryText="daily newsletter subscribers" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+105%" secondaryText="paying subscribers" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+65%" secondaryText="page views" />
          </div>
        </div>
      </div>
    </section>
    <section className="sm:mt-10 mb-24 text-center">
      <h2 className="text-3xl lg:text-5xl font-semibold">Use Parse.ly to win with content</h2>
    </section>
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Measure content performance</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Make data-driven decisions with democratized access to content data. Use
            easy-to-understand content analytics, charts, and graphs
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Understand reader engagement and behavior
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Understand what's resonating with readers in real-time, or analyze historical trends
            across audience segments to discover new opportunities.
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Grow your business</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Improve key metrics like engagement, conversion, and retention to drive revenue and
            impact. Double down on what works and meet your goals.
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <section className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">What customers are saying</LabelText>
        <div className="flex -mx-3">
          {customerData.map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Ready to win with content?</h3>
      <p className="mt-8 text-xl font-light">
        Join thousands of editors and content marketers who use Parse.ly every day.
      </p>
      <p className="mt-8">
        <Button size="xl">Integrate Now</Button>
      </p>
      <p className="mt-8">
        <a href="https://codebushi.com" className="font-semibold text-gray-600">
          Or talk to a content analytics expert
        </a>
      </p>
    </section>
  </Layout>
);
