import Layout from 'src/components/layout-app';
import Page from 'src/components/page';
import Head from 'next/head';
import { getAllAppIDs, getAppData, getSortedAppsData } from '/lib/apps';
import emailjs from 'emailjs-com';

export async function getStaticProps({ params }) {
  const apps = await getSortedAppsData();
  const app = await getAppData(params.app);

  return {
    props: {
      apps,
      app,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllAppIDs();
  return {
    paths,
    fallback: false,
  };
}

export default function Support({ apps, app }) {
  return (
    <Layout apps={apps} app={app}>
      <Head>
        <title>Support | {app.name}</title>
      </Head>

      <Page title="Support" theme={app.theme}>
        <div className={`${app.theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
          <p className="mb-4">
            We welcome your feedback, support requests, and bug reports. We are committed to responding promptly, typically within a few hours. Providing detailed information will help us resolve your issues more efficiently.
          </p>
        </div>

        <form className="mt-4" onSubmit={(event) => handleSubmit(event, app)}>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="userEmail">
              Your Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="userEmail"
              name="userEmail"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="version">
              {app.name} Version (e.g. 2.0.0)
            </label>
            <input
              type="text"
              id="version"
              name="version"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="osVersion">
              OS Version (e.g. iOS 17.1)
            </label>
            <input
              type="text"
              id="osVersion"
              name="osVersion"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="device">
              Device (e.g. iPhone 15 Pro)
            </label>
            <input
              type="text"
              id="device"
              name="device"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="message">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows="5"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Send Email
          </button>
        </form>

        <p className="mt-6">
          If you have any issues with the form, contact us directly at 
          <a href="mailto:rupertusapps@gmail.com" className="text-blue-500 hover:underline pl-1">
            rupertusapps@gmail.com
          </a>.
        </p>
      </Page>
    </Layout>
  );
}

// Modify the handleSubmit function to accept the app parameter
async function handleSubmit(event, app) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = {
    from_name: formData.get('userEmail'),
    message: `App: ${app.name}\nVersion: ${formData.get('version') || 'N/A'}\nOS Version: ${formData.get('osVersion') || 'N/A'}\nDevice: ${formData.get('device') || 'N/A'}\n\n${formData.get('message')}`,
    reply_to: formData.get('userEmail'),
  };

  // Send email using EmailJS
  emailjs.send('service_ceahzzk', 'template_cjtrt1b', data, 'cevXLIhqMnVLqrFK-')
    .then((response) => {
      console.log('Email sent successfully!', response.status, response.text);
      alert('Email sent successfully!');
    })
    .catch((err) => {
      console.error('Failed to send email:', err);
      alert('Failed to send email.');
    });
}