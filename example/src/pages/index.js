import React from 'react';
import Button from '../components/Button';
import Layout from '../components/Layout';

export default () => (
  <Layout>
    <section className="pt-40 text-gray-900">
      <div className="container flex mx-auto px-8">
        <div className="w-1/2">
          <h1 className="text-6xl font-bold leading-none">Content analytics you'll enjoy using</h1>
          <p className="mt-6 text-2xl font-light">
            Quickly understand what content drives business impact with Parse.ly
          </p>
          <p className="mt-12">
            <Button size="lg">Get Started</Button>
          </p>
          <p className="mt-4 text-gray-600">No credit card required</p>
        </div>
        <div className="w-1/2">image</div>
      </div>
    </section>
  </Layout>
);
