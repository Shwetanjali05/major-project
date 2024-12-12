import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Image from "next/image";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Link from "next/link";

const Documentation = () => {
  return (
    <DefaultLayout>
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold mb-6">How to Invest Your Money Smartly</h1>

        {/* Introduction Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Investing is a powerful tool for building wealth over time. Smart investing involves making informed
            decisions, understanding risks, and aligning investments with your goals.
          </p>
        </section>

        {/* Investment Basics Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Investment Basics</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li><strong>Risk:</strong> The uncertainty of returns in an investment.</li>
            <li><strong>Return:</strong> The profit or income generated from an investment.</li>
            <li><strong>Diversification:</strong> Spreading investments to reduce risk.</li>
          </ul>
        </section>

        {/* Types of Investments Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Types of Investments</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium">1. Stocks</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Investing in shares of a company gives you partial ownership and potential for high returns.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium">2. Bonds</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Bonds are loans to companies or governments with regular interest payments.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium">3. Mutual Funds</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Pooled investments managed by professionals to diversify risks.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium">4. Real Estate</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Investing in property for rental income or capital appreciation.
              </p>
            </div>
          </div>
        </section>

        {/* Tips for Smart Investing Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Tips for Smart Investing</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Set clear financial goals before investing.</li>
            <li>Start early to leverage the power of compounding.</li>
            <li>Keep an emergency fund before taking investment risks.</li>
            <li>Research thoroughly before investing in any asset.</li>
            <li>Avoid putting all your money in one type of investment (diversify).</li>
          </ol>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-lg">What is the best investment for beginners?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Beginners can start with low-risk options like index funds or mutual funds.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-lg">How much should I invest?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Aim to invest at least 20% of your income, but adjust based on your financial situation.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-lg">Is investing risky?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                All investments carry some risk, but understanding and managing risks can minimize potential losses.
              </p>
            </div>
          </div>
        </section>
      </div>
    </DefaultLayout>
  );
};

export default Documentation;
