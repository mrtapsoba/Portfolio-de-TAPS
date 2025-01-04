import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique pour traiter le formulaire
    console.log('Formulaire soumis');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Nom</label>
          <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-lg" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
          <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-lg" required />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
          <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 border rounded-lg" required></textarea>
        </div>
        <button type="submit" className="bg-blue-700 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300">
          Envoyer
        </button>
      </form>
      <div>
        <h3 className="text-xl font-semibold mb-4">Retrouvez-moi sur les réseaux sociaux</h3>
        <div className="flex space-x-4">
          <a href="#" className="text-blue-700 hover:text-blue-600"><FaLinkedin size={24} /></a>
          <a href="#" className="text-blue-700 hover:text-blue-600"><FaGithub size={24} /></a>
          <a href="#" className="text-blue-700 hover:text-blue-600"><FaTwitter size={24} /></a>
        </div>
      </div>
    </div>
  );
}

export default Contact;

