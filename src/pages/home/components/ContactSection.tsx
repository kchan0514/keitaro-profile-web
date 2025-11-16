import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../../../components/base/Button';

export default function ContactSection() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch('https://readdy.ai/api/form/d3h6januqofrij837dlg', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          organization: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('contact.title')}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent ml-3">
              {t('contact.titleHighlight')}
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                  <i className="ri-information-line text-white text-lg"></i>
                </div>
                {t('contact.info.title')}
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start group hover:bg-gray-700/30 rounded-xl p-4 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-mail-line text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{t('contact.info.email')}</h4>
                    <a
                      href="mailto:keitaro@iis-lab.org"
                      className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                    >
                      keitaro@iis-lab.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start group hover:bg-gray-700/30 rounded-xl p-4 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-building-line text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{t('contact.info.affiliation')}</h4>
                    <p className="text-gray-300 whitespace-pre-line">
                      {t('contact.info.affiliationText')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start group hover:bg-gray-700/30 rounded-xl p-4 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-team-line text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{t('contact.info.lab')}</h4>
                    <p className="text-gray-300 whitespace-pre-line">
                      {t('contact.info.labText')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 shadow-xl">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mr-3">
                  <i className="ri-lightbulb-line text-white text-sm"></i>
                </div>
                {t('contact.inquiries.title')}
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300 hover:text-white transition-colors duration-200">
                  <i className="ri-check-line text-green-400 mr-3"></i>
                  {t('contact.inquiries.xr')}
                </li>
                <li className="flex items-center text-gray-300 hover:text-white transition-colors duration-200">
                  <i className="ri-check-line text-green-400 mr-3"></i>
                  {t('contact.inquiries.edtech')}
                </li>
                <li className="flex items-center text-gray-300 hover:text-white transition-colors duration-200">
                  <i className="ri-check-line text-green-400 mr-3"></i>
                  {t('contact.inquiries.gamification')}
                </li>
                <li className="flex items-center text-gray-300 hover:text-white transition-colors duration-200">
                  <i className="ri-check-line text-green-400 mr-3"></i>
                  {t('contact.inquiries.hci')}
                </li>
                <li className="flex items-center text-gray-300 hover:text-white transition-colors duration-200">
                  <i className="ri-check-line text-green-400 mr-3"></i>
                  {t('contact.inquiries.consulting')}
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                  <i className="ri-share-line text-white text-sm"></i>
                </div>
                {t('contact.social.title')}
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/keitaroshimizu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-700/50 backdrop-blur-sm border border-gray-600 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all duration-300 cursor-pointer"
                >
                  <i className="ri-linkedin-fill text-xl"></i>
                </a>
                <a
                  href="https://twitter.com/GIZAGIZAHEART"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-700/50 backdrop-blur-sm border border-gray-600 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-400 hover:text-white hover:border-blue-400 transition-all duration-300 cursor-pointer"
                >
                  <i className="ri-twitter-fill text-xl"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 shadow-xl">
            <form onSubmit={handleSubmit} data-readdy-form id="contact-form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    {t('contact.form.name')} <span className="text-red-400">{t('contact.form.required')}</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm text-white placeholder-gray-400"
                    placeholder={t('contact.form.namePlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    {t('contact.form.email')} <span className="text-red-400">{t('contact.form.required')}</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm text-white placeholder-gray-400"
                    placeholder={t('contact.form.emailPlaceholder')}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-300 mb-2">
                    {t('contact.form.organization')}
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm text-white placeholder-gray-400"
                    placeholder={t('contact.form.organizationPlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    {t('contact.form.subject')}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm text-white placeholder-gray-400"
                    placeholder={t('contact.form.subjectPlaceholder')}
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  {t('contact.form.message')} <span className="text-red-400">{t('contact.form.required')}</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  maxLength={500}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none text-sm text-white placeholder-gray-400"
                  placeholder={t('contact.form.messagePlaceholder')}
                />
                <div className="text-right text-sm text-gray-400 mt-1">
                  {t('contact.form.charCount', { count: formData.message.length })}
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full whitespace-nowrap bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0 shadow-lg shadow-blue-500/25"
                disabled={isSubmitting || formData.message.length > 500}
              >
                {isSubmitting ? (
                  <>
                    <i className="ri-loader-4-line animate-spin mr-2"></i>
                    {t('contact.form.submitting')}
                  </>
                ) : (
                  <>
                    <i className="ri-send-plane-line mr-2"></i>
                    {t('contact.form.submit')}
                  </>
                )}
              </Button>

              {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-900/50 border border-green-700 rounded-lg backdrop-blur-sm">
                  <div className="flex items-center text-green-300">
                    <i className="ri-check-circle-line mr-2"></i>
                    {t('contact.form.success')}
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-900/50 border border-red-700 rounded-lg backdrop-blur-sm">
                  <div className="flex items-center text-red-300">
                    <i className="ri-error-warning-line mr-2"></i>
                    {t('contact.form.error')}
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
