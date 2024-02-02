import { useState } from 'react';

const PitchForm = () => {
    const [name, setName] = useState('');
    const [startupName, setStartpName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('');
    const [startupUrl, setStartupUrl] = useState('');
    const [startupDesc, setStartupDesc] = useState('');
    const [social, setSocial] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [founderBio, setFounderBio] = useState('');
    const [pitch, setPitch] = useState('');
    const [startupSector, setStartupSector] = useState('');
    const [blockchain, setBlockchain] = useState('');
    const [funds, setFunds] = useState('');
    const [deckPDF, setDeckPDF] = useState('');
    const [deckLink, setDeckLink] = useState('');
    const [aboutUs, setAboutUs] = useState('');
    const [startupTicket, setStartupTicket] = useState('');
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
        formData.append('Name', name);
        formData.append('Startup Name', startupName);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('country', country);
        formData.append('Startup URL', startupUrl);
        formData.append('Founder Bio', founderBio);
        formData.append('Startup in 1 sentence', startupDesc);
        formData.append('Elevator pitch', pitch);
        formData.append('Startup sectors', startupSector);
        formData.append('Blockchain you are working on', blockchain);
        formData.append('are you raising funds', funds);
        formData.append('Your Deck PDF', deckPDF);
        formData.append('Your Deck Link', deckLink);
        formData.append('Telegram | twitter handle', social);
        formData.append('Linkedin url', linkedin);
        formData.append('How did you hear about us', aboutUs);
        formData.append('get a startup ticket for LBW', startupTicket);
        formData.append('Lagos Blockchain Week is committed to protecting and respecting your privacy, and we will only use your personal information to provide information on our products and services.', consent);
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
                <span className="font-bold text-lg "> #LBW2024 Founder's Pitch registration</span>
            </label>
            <br/>
            <label className="block mb-2">
                <span className="text-gray-700 font-bold">Name:</span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-input mt-1 block w-full"
                  placeholder="  enter your full name"
                  required
                />
            </label>
            <br/>
            <label className="block mb-2">
                <span className="text-gray-700 font-bold">Startup Name:</span>
                <input
                  type="text"
                  value={startupName}
                  onChange={(e) => setStartpName(e.target.value)}
                  className="form-input mt-1 block w-full"
                  placeholder="  enter your startup name"
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
                  placeholder=" joe@example.com"
                  required
                />
            </label>
            <br/>
            <label className="block mb-2">
                <span className="text-gray-700 font-bold">Phone:</span>
                <input
                  type="number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="form-input mt-1 block w-full"
                  placeholder=" +23XXXXXXXXXXXX"
                  required
                />
            </label>
            <br/>
            <label className="block mb-2">
                <span className="text-gray-700 font-bold">Country:</span>
                <input
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="form-input mt-1 block w-full"
                  placeholder=" Your country Name"
                  required
                />
            </label>
            <br/>
            <label className="block mb-2">
                <span className="text-gray-700 font-bold">Start-up Url:</span>
                <input
                  type="text"
                  value={startupUrl}
                  onChange={(e) => setStartupUrl(e.target.value)}
                  className="form-input mt-1 block w-full"
                  placeholder=" https://www.example.com"
                  required
                />
            </label>
            <br/>
            <label className="block mb-2">
                <span className="text-gray-700 font-bold">Founder's Bio:</span>
                <input
                  type="text"
                  value={founderBio}
                  onChange={(e) => setFounderBio(e.target.value)}
                  className="form-input mt-1 block w-full"
                  placeholder=" Founder's summary"
                  required
                />
            </label>
            <br/>
            <label className="block mb-2">
                <span className="text-gray-700 font-bold">Socials: Telegram | X handle:</span>
                <input
                  type="text"
                  value={social}
                  onChange={(e) => setSocial(e.target.value)}
                  className="form-input mt-1 block w-full"
                  placeholder=" e.g Telegram@username"
                  required
                />
            </label>
            <br/>
            <label className="block mb-2">
                <span className="text-gray-700 font-bold">LinkedIn Url:</span>
                <input
                  type="text"
                  value={linkedin}
                  onChange={(e) => setLinkedin(e.target.value)}
                  className="form-input mt-1 block w-full"
                  placeholder=" link to linkedin profile"
                  required
                />
            </label>
            <br/>
            <label className="block mb-2">
                <span className="text-gray-700 font-bold">Your Startup in 1 sentence:</span>
                <input
                  type="text"
                  value={startupDesc}
                  onChange={(e) => setStartupDesc(e.target.value)}
                  className="form-input mt-1 block w-full"
                  required
                />
                <hr/>
            </label>
            <br/>
            <label className="block mb-2">
                <span className="text-gray-700 font-bold">Your pitch elevator:</span>
                <input
                  type="text"
                  value={pitch}
                  onChange={(e) => setPitch(e.target.value)}
                  className="form-input mt-1 block w-full"
                  required
                />
                <hr/>
            </label>
            <br/>
            <label className="block mb-2">
                <span className="text-gray-700 font-bold">Startup sector (3 Max)</span><br/>
                <input
                 type="checkbox"
                 value={startupSector}
                 onChange={(e) => setStartupSector(e.target.value)}
                 className="mr-2 leading-tight"
                 required
                />
                <span className="text-gray-700 font-md">CeFi</span><br/>
                <input
                 type="checkbox"
                 value={startupSector}
                 onChange={(e) => setStartupSector(e.target.value)}
                 className="mr-2 leading-tight"
                 required
                />
                <span className="text-gray-700 font-md">CrossChain</span><br/>
                <input
                 type="checkbox"
                 value={startupSector}
                 onChange={(e) => setStartupSector(e.target.value)}
                 className="mr-2 leading-tight"
                 required
                />
                <span className="text-gray-700 font-md">Custody</span><br/>
                <input
                 type="checkbox"
                 value={startupSector}
                 onChange={(e) => setStartupSector(e.target.value)}
                 className="mr-2 leading-tight"
                 required
                />
                <span className="text-gray-700 font-md">DAO</span><br/>
                <input
                 type="checkbox"
                 value={startupSector}
                 onChange={(e) => setStartupSector(e.target.value)}
                 className="mr-2 leading-tight"
                 required
                />
                <span className="text-gray-700 font-md">Data</span><br/>
                <input
                 type="checkbox"
                 value={startupSector}
                 onChange={(e) => setStartupSector(e.target.value)}
                 className="mr-2 leading-tight"
                 required
                />
                <span className="text-gray-700 font-md">DeFi</span><br/>
                <input
                 type="checkbox"
                 value={startupSector}
                 onChange={(e) => setStartupSector(e.target.value)}
                 className="mr-2 leading-tight"
                 required
                />
                <span className="text-gray-700 font-md">Gaming</span><br/>
                <input
                 type="checkbox"
                 value={startupSector}
                 onChange={(e) => setStartupSector(e.target.value)}
                 className="mr-2 leading-tight"
                 required
                />
                <span className="text-gray-700 font-md">Identity</span><br/>
                <input
                 type="checkbox"
                 value={startupSector}
                 onChange={(e) => setStartupSector(e.target.value)}
                 className="mr-2 leading-tight"
                 required
                />
                <span className="text-gray-700 font-md">Infra</span><br/>
                <input
                 type="checkbox"
                 value={startupSector}
                 onChange={(e) => setStartupSector(e.target.value)}
                 className="mr-2 leading-tight"
                 required
                />
                <span className="text-gray-700 font-md">Marketing</span><br/>
                <input
                 type="checkbox"
                 value={startupSector}
                 onChange={(e) => setStartupSector(e.target.value)}
                 className="mr-2 leading-tight"
                 required
                />
                <span className="text-gray-700 font-md">Metaverse</span><br/>
                <input
                 type="checkbox"
                 value={startupSector}
                 onChange={(e) => setStartupSector(e.target.value)}
                 className="mr-2 leading-tight"
                 required
                />
                <span className="text-gray-700 font-md">Mining and Staking</span><br/>
                <input
                 type="checkbox"
                 value={startupSector}
                 onChange={(e) => setStartupSector(e.target.value)}
                 className="mr-2 leading-tight"
                 required
                />
                <span className="text-gray-700 font-md">NFT</span><br/>
                <input
                 type="checkbox"
                 value={startupSector}
                 onChange={(e) => setStartupSector(e.target.value)}
                 className="mr-2 leading-tight"
                 required
                />
                <span className="text-gray-700 font-md">Regulation and Compliance</span><br/>
                <input
                 type="checkbox"
                 value={startupSector}
                 onChange={(e) => setStartupSector(e.target.value)}
                 className="mr-2 leading-tight"
                 required
                />
                <span className="text-gray-700 font-md">Social, Community and Builders</span><br/>
                <input
                 type="checkbox"
                 value={startupSector}
                 onChange={(e) => setStartupSector(e.target.value)}
                 className="mr-2 leading-tight"
                 required
                />
                <span className="text-gray-700 font-md">Tooling</span><br/>
                <input
                 type="checkbox"
                 value={startupSector}
                 onChange={(e) => setStartupSector(e.target.value)}
                 className="mr-2 leading-tight"
                 required
                />
                <span className="text-gray-700 font-md">Web 2.5</span><br/>
                <input
                 type="checkbox"
                 value={startupSector}
                 onChange={(e) => setStartupSector(e.target.value)}
                 className="mr-2 leading-tight"
                 required
                />
                <span className="text-gray-700 font-md">Agriculture</span><br/>
                <input
                 type="checkbox"
                 value={startupSector}
                 onChange={(e) => setStartupSector(e.target.value)}
                 className="mr-2 leading-tight"
                 required
                />
                <span className="text-gray-700 font-md">Other</span><br/>
            </label>
            <br/>
            <label className="block mb-2">
                <span className="text-gray-700 font-bold">Blockchains you are building on</span><br/>
                <input
                 type="checkbox"
                 value={blockchain}
                 onChange={(e) => setBlockchain(e.target.value)}
                 className="mr-2 leading-tight"
                 required
                />
                <span className="text-gray-700 font-md">Algorand</span><br/>
                <input
                 type="checkbox"
                 value={blockchain}
                 onChange={(e) => setBlockchain(e.target.value)}
                 className="mr-2 leading-tight"
                 required
                />
                <span className="text-gray-700 font-md">Arbitrum</span><br/>
                <input
                 type="checkbox"
                 value={blockchain}
                 onChange={(e) => setBlockchain(e.target.value)}
                 className="mr-2 leading-tight"
                 required
                />
                <span className="text-gray-700 font-md">Avalanche</span><br/>
                <input
                 type="checkbox"
                 value={blockchain}
                 onChange={(e) => setBlockchain(e.target.value)}
                 className="mr-2 leading-tight"
                 required
                />
                <span className="text-gray-700 font-md">Bitcoin</span><br/>
                <input
                 type="checkbox"
                 value={blockchain}
                 onChange={(e) => setBlockchain(e.target.value)}
                 className="mr-2 leading-tight"
                 required
                />
                <span className="text-gray-700 font-md">BNB Chain</span><br/>
                <input
                 type="checkbox"
                 value={blockchain}
                 onChange={(e) => setBlockchain(e.target.value)}
                 className="mr-2 leading-tight"
                 required
                />
                <span className="text-gray-700 font-md">Cardona</span><br/>
                <input
                 type="checkbox"
                 value={blockchain}
                 onChange={(e) => setBlockchain(e.target.value)}
                 className="mr-2 leading-tight"
                 required
                />
                <span className="text-gray-700 font-md">Cosmos</span><br/>
                <input
                 type="checkbox"
                 value={blockchain}
                 onChange={(e) => setBlockchain(e.target.value)}
                 className="mr-2 leading-tight"
                 required
                />
                <span className="text-gray-700 font-md">Ethereum</span><br/>
                <input
                 type="checkbox"
                 value={blockchain}
                 onChange={(e) => setBlockchain(e.target.value)}
                 className="mr-2 leading-tight"
                 required
                />
                <span className="text-gray-700 font-md">Mantle</span><br/>
                <input
                 type="checkbox"
                 value={blockchain}
                 onChange={(e) => setBlockchain(e.target.value)}
                 className="mr-2 leading-tight"
                 required
                />
                <span className="text-gray-700 font-md">MultiversX</span><br/>
                <input
                 type="checkbox"
                 value={blockchain}
                 onChange={(e) => setBlockchain(e.target.value)}
                 className="mr-2 leading-tight"
                 required
                />
                <span className="text-gray-700 font-md">Near</span><br/>
                <input
                 type="checkbox"
                 value={blockchain}
                 onChange={(e) => setBlockchain(e.target.value)}
                 className="mr-2 leading-tight"
                 required
                />
                <span className="text-gray-700 font-md">Optimism</span><br/>
                <input
                 type="checkbox"
                 value={blockchain}
                 onChange={(e) => setBlockchain(e.target.value)}
                 className="mr-2 leading-tight"
                 required
                />
                <span className="text-gray-700 font-md">Poldakot</span><br/>
                <input
                 type="checkbox"
                 value={blockchain}
                 onChange={(e) => setBlockchain(e.target.value)}
                 className="mr-2 leading-tight"
                 required
                />
                <span className="text-gray-700 font-md">Polygon</span><br/>
                <input
                 type="checkbox"
                 value={blockchain}
                 onChange={(e) => setBlockchain(e.target.value)}
                 className="mr-2 leading-tight"
                 required
                />
                <span className="text-gray-700 font-md">Solana</span><br/>
                <input
                 type="checkbox"
                 value={blockchain}
                 onChange={(e) => setBlockchain(e.target.value)}
                 className="mr-2 leading-tight"
                 required
                />
                <span className="text-gray-700 font-md">Starknet</span><br/>
                <input
                 type="checkbox"
                 value={blockchain}
                 onChange={(e) => setBlockchain(e.target.value)}
                 className="mr-2 leading-tight"
                 required
                />
                <span className="text-gray-700 font-md">Stellar</span><br/>
                <input
                 type="checkbox"
                 value={blockchain}
                 onChange={(e) => setBlockchain(e.target.value)}
                 className="mr-2 leading-tight"
                 required
                />
                <span className="text-gray-700 font-md">Tezos</span><br/>
                <input
                 type="checkbox"
                 value={blockchain}
                 onChange={(e) => setBlockchain(e.target.value)}
                 className="mr-2 leading-tight"
                 required
                />
                <span className="text-gray-700 font-md">Other</span><br/>
            </label>
            <br/>
            <label className="block mb-2">
                <span className="text-gray-700 font-bold">Are you raising funds?:</span>
                <select
                    value={funds}
                    onChange={(e) => setFunds(e.target.value)}
                    className="form-select mt-1 block w-full"
                    required
                >
                <option value="" disabled>Choose</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
                </select>
            </label>
            <br/>
            <label className="block mb-2">
                <span className="text-gray-700 font-bold">Your Deck (PDF Presentation):</span>
                <input
                  type="file"
                  value={deckPDF}
                  onChange={(e) => setDeckPDF(e.target.value)}
                  className="form-input mt-1 block w-full"
                  required
                />
            </label>
            <br/>
            <label className="block mb-2">
                <span className="text-gray-700 font-bold">Your pitch deck link:</span>
                <input
                  type="text"
                  value={deckLink}
                  onChange={(e) => setDeckLink(e.target.value)}
                  className="form-input mt-1 block w-full"
                  required
                />
            </label>
            <br/>
            <label className="block mb-2">
                <span className="text-gray-700 font-bold">How did you hear about us</span><br/>
                <input
                 type="checkbox"
                 value={aboutUs}
                 onChange={(e) => setAboutUs(e.target.value)}
                 className="mr-2 leading-tight"
                 required
                />
                <span className="text-gray-700 font-md">from another company/someone else</span><br/>
                <input
                 type="checkbox"
                 value={aboutUs}
                 onChange={(e) => setAboutUs(e.target.value)}
                 className="mr-2 leading-tight"
                 required
                />
                <span className="text-gray-700 font-md">Event</span><br/>
                <input
                 type="checkbox"
                 value={aboutUs}
                 onChange={(e) => setAboutUs(e.target.value)}
                 className="mr-2 leading-tight"
                 required
                />
                <span className="text-gray-700 font-md">Emails</span><br/>
                <input
                 type="checkbox"
                 value={aboutUs}
                 onChange={(e) => setAboutUs(e.target.value)}
                 className="mr-2 leading-tight"
                 required
                />
                <span className="text-gray-700 font-md">LinkedIn</span><br/>
                <input
                 type="checkbox"
                 value={aboutUs}
                 onChange={(e) => setAboutUs(e.target.value)}
                 className="mr-2 leading-tight"
                 required
                />
                <span className="text-gray-700 font-md">Telegram</span><br/>
                <input
                 type="checkbox"
                 value={aboutUs}
                 onChange={(e) => setAboutUs(e.target.value)}
                 className="mr-2 leading-tight"
                 required
                />
                <span className="text-gray-700 font-md">Whatsapp</span><br/>
                <input
                 type="checkbox"
                 value={aboutUs}
                 onChange={(e) => setAboutUs(e.target.value)}
                 className="mr-2 leading-tight"
                 required
                />
                <span className="text-gray-700 font-md">Discord</span><br/>
                <input
                 type="checkbox"
                 value={aboutUs}
                 onChange={(e) => setAboutUs(e.target.value)}
                 className="mr-2 leading-tight"
                 required
                />
                <span className="text-gray-700 font-md">Instagram</span><br/>
                <input
                 type="checkbox"
                 value={aboutUs}
                 onChange={(e) => setAboutUs(e.target.value)}
                 className="mr-2 leading-tight"
                 required
                />
                <span className="text-gray-700 font-md">TikTok</span><br/>
                <input
                 type="checkbox"
                 value={aboutUs}
                 onChange={(e) => setAboutUs(e.target.value)}
                 className="mr-2 leading-tight"
                 required
                />
                <span className="text-gray-700 font-md">Blog/Articles</span><br/>
                <span className="text-gray-700 font-md">Other  </span>
                <input
                 type="text"
                 value={aboutUs}
                 onChange={(e) => setAboutUs(e.target.value)}
                 className="mr-2 leading-tight"
                 required
                />
            </label>
            <br/>
            <label className="block mb-2">
                <span className="text-gray-700 font-bold">Get a startup ticket for #LBW2024:</span>
                <select
                    value={startupTicket}
                    onChange={(e) => setStartupTicket(e.target.value)}
                    className="form-select mt-1 block w-full"
                    required
                >
                <option value="" disabled>Choose</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
                </select>
            </label>
            <br/>
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

export default PitchForm;