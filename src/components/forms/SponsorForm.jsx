import { useState } from 'react';

const SponsorForm = () => {
    const [contactName, setContactName] = useState('');
    const [sponsor, setSponsor] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('');
    const [social, setSocial] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [sponsorUrl, setSponsorUrl] = useState('');
    const [consent, setConsent] = useState('');
    const [agree, setAgree] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!agree) {
            alert("Please acknowlwdge to receive communication from us.");
            return;
          }
    
        // Send data to Formspree
        const formData = new FormData();
        formData.append('Contact Name', contactName);
        formData.append('Sponsor Name', sponsor);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('country', country);
        formData.append('Sponsor URL', sponsorUrl);
        formData.append('Telegram | twitter handle', social);
        formData.append('Linkedin url', linkedin);
        formData.append('Lagos Blockchain Week is committed to protecting and respecting your privacy, and we’ll only use your personal information to provide information on our products and services.', consent);
        formData.append('I agree to receive other communications from Lagos Blockchain Week.', agree);
    
        try {
          const response = await fetch('https://formspree.io/', {
            method: 'POST',
            body: formData,
            headers: {
              'Accept': 'application/json',
            },
          });
    
          if (response.ok) {
            // Redirect to a success page
            console.log(response);
            // router.push('/success');
          } else {
            // Handle error
            console.error('Form submission failed');
          }
        } catch (error) {
          console.error('Error submitting form:', error);
         }
    };
    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-black shadow-md rounded-md">
            <label className="block m-4 text-gray-800 text-center">
                <span className="font-bold text-lg "> Sponsor #LBW2024</span>
            </label>
            <br/>
            <label className="block mb-2">
                <span className="text-gray-700 font-bold">Contact Name:</span>
                <input
                  type="text"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="form-input mt-1 block w-full"
                  placeholder="  enter your full name"
                  required
                />
            </label>
            <br/>
            <label className="block mb-2">
                <span className="text-gray-700 font-bold">Sponsor Name:</span>
                <input
                  type="text"
                  value={sponsor}
                  onChange={(e) => setSponsor(e.target.value)}
                  className="form-input mt-1 block w-full"
                  placeholder="  enter sponsor name"
                  required
                />
            </label>
            <br/>
            <label className="block mb-2">
                <span className="text-gray-700 font-bold">Email:</span>
                <input 
                 type="email"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 className="form-input mt-1 block w-full"
                 placeholder="  john@example.com"
                 required
                />
            </label>
             <br/>
             <label className="block mb-2">
                <span className="text-gray-700 font-bold">Phone</span>
                <input
                 type="number"
                 value={phone}
                 onChange={(e) => setPhone(e.target.value)}
                 className="form-input mt-1 block w-full"
                 placeholder="  +23XXXXXXXXXXX"
                 required
                />
            </label>
            <br/>
             <label className="block mb-2">
                <span className="text-gray-700 font-bold">Country</span>
                <input
                 type="text"
                 value={country}
                 onChange={(e) => setCountry(e.target.value)}
                 className="form-input mt-1 block w-full"
                 placeholder="  Enter your country Name"
                 required
                />
            </label>
            <br/>
             <label className="block mb-2">
                <span className="text-gray-700 font-bold">Telegram | X Handle</span>
                <input
                 type="text"
                 value={social}
                 onChange={(e) => setSocial(e.target.value)}
                 className="form-input mt-1 block w-full"
                 placeholder="  E.g telegram@username"
                 required
                />
            </label>
            <br/>
            <label className="block mb-2">
                <span className="text-gray-700 font-bold">Sponsor URL</span>
                <input
                 type="text"
                 value={sponsorUrl}
                 onChange={(e) => setSponsorUrl(e.target.value)}
                 className="form-input mt-1 block w-full"
                 placeholder=" https://www.example.com"
                 required
                />
            </label>
            <br/>
            <label className="block mb-2">
                <span className="text-gray-700 font-bold">LinkedIn URL</span>
                <input
                 type="text"
                 value={linkedin}
                 onChange={(e) => setLinkedin(e.target.value)}
                 className="form-input mt-1 block w-full"
                 placeholder=" linkedin url"
                 required
                />
                <hr/>
            </label>
            <label className="block mb-2">
               <input
                 type="checkbox"
                 value={consent}
                 onChange={(e) => setConsent(e.target.value)}
                 className="mr-2 leading-tight"
                 required
                />
                <span className="text-gray-700">Lagos Blockchain Week is committed to protecting and respecting your privacy, and we will only use your personal information to provide information on our products and services.</span>
            </label>
            <br/>
            <label className="block mb-2">
                <input
                 type="checkbox"
                 value={agree}
                 onChange={(e) => setAgree(e.target.value)}
                 className="mr-2 leading-tight"
                 required
                />
                <span className="text-gray-700 font-md">I agree to receive other communications from Lagos Blockchain Week.</span>
            </label>
            <div className="bg-black rounded max-w-sm mx-auto flex justify-center">
                <button
                 type="submit"
                 className=" text-white p-2 hover:text-blue focus:outline-none focus:shadow-outline-blue active:bg-green-800">
                    Submit
                </button>
            </div>
      </form>
    );
};

export default SponsorForm;