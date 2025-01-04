import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { motion } from 'framer-motion';

function Skills() {
  const skills = [
    { name: 'Python', level: 90 },
    { name: 'Flutter', level: 85 },
    { name: 'Power BI', level: 95 },
    { name: 'React', level: 80 },
    { name: 'Laravel', level: 75 },
    { name: 'Machine Learning', level: 85 },
  ];

  return (
    <motion.div 
      className="max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-6">Compétences techniques</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={skills} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#525252" />
          <XAxis type="number" domain={[0, 100]} stroke="#525252" />
          <YAxis dataKey="name" type="category" stroke="#525252" />
          <Tooltip contentStyle={{ backgroundColor: '#1F2937', color: '#F3F4F6' }} />
          <Bar dataKey="level" fill="#3B82F6">
            {skills.map((entry, index) => (
              <Cell key={`cell-${index}`} fillOpacity={0.8} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
}

export default Skills;

