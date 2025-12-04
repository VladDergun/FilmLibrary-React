import React from 'react';
import styles from './About.module.css';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';

const About = () => {
  const revenueData = [
    { year: 2020, revenue: '11.4', change: '-71.6%' },
    { year: 2021, revenue: '21.3', change: '+86.8%' },
    { year: 2022, revenue: '25.9', change: '+21.6%' },
    { year: 2023, revenue: '28.5', change: '+10.0%' },
    { year: 2024, revenue: '31.2', change: '+9.5%' }
  ];

  return (
    <>
    <Header/>
    <div className={styles.aboutContainer}>
      <div className={styles.content}>
        <h1 className={styles.title}>About Film Industry Revenue</h1>
        <p className={styles.description}>
          The film industry has shown remarkable recovery and growth since 2020. 
          The following table illustrates the annual revenue progression from 2020 to 2024, 
          showcasing the industry's resilience and adaptation to changing market conditions.
        </p>
        
        <div className={styles.tableContainer}>
          <h2 className={styles.tableTitle}>Annual Revenue Progression (2020-2024)</h2>
          <table className={styles.revenueTable}>
            <thead>
              <tr>
                <th>Year</th>
                <th>Revenue (Billions USD)</th>
                <th>Year-over-Year Change</th>
              </tr>
            </thead>
            <tbody>
              {revenueData.map((data) => (
                <tr key={data.year}>
                  <td>{data.year}</td>
                  <td>${data.revenue}B</td>
                  <td className={data.change.startsWith('+') ? styles.positive : styles.negative}>
                    {data.change}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.insights}>
          <h3>Key Insights</h3>
          <ul>
            <li><strong>2020 Impact:</strong> The pandemic caused a significant 71.6% drop in revenue</li>
            <li><strong>2021 Recovery:</strong> Strong rebound with 86.8% growth as theaters reopened</li>
            <li><strong>Steady Growth:</strong> Consistent positive growth from 2022-2024</li>
            <li><strong>Total Recovery:</strong> Revenue nearly tripled from the 2020 low point</li>
          </ul>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default About;