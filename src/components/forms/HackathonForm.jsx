import { useState } from 'react';

const HackathonForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
//   const [developer, setDeveloper] = useState('');
//   const [student, setStudent] = useState('');
  const [employed, setEmployed] = useState('');
  const [blockchain, setBlockchain] = useState('');
  const [country, setCountry] = useState('');
  const [github, setGithub] = useState('');
  const [social, setSocial] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [tellUsWhy, setTellusWhy] = useState('');
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
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    // formData.append('Are you a developer', developer);
    // formData.append('Are you a student', student);
    formData.append('Employment status', employed);
    formData.append('Blockchain Specialization', blockchain);
    formData.append('country', country);
    formData.append('Github URL', github);
    formData.append('Telegram | twitter handle', social);
    formData.append('Linkedin url', linkedin);
    formData.append('Please tell us why you are interested in Hackathon 2024', tellUsWhy);
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
        router.push('/success');
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
        <span className="font-bold text-lg ">#LBW2024 Hackathon Registration</span>
        </label>
        <br/>
       <label className="block mb-2">
        <span className="text-gray-700 font-bold">Full Name:</span>
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
      {/* <label className="block mb-2">
        <span className="text-gray-700 font-bold">Are you a developer ?</span>
        <select
          value={developer}
          onChange={(e) => setDeveloper(e.target.value)}
          className="form-select mt-1 block w-full"
          required
        >
          <option value="" disabled>Choose</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </label>
      <br/>
      <label className="block mb-2">
        <span className="text-gray-700 font-bold">Are you a student ?</span>
        <select
          value={student}
          onChange={(e) => setStudent(e.target.value)}
          className="form-select mt-1 block w-full"
          required
        >
          <option value="" disabled>Choose</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </label> 
  <br/> */}
      <label className="block mb-2">
        <span className="text-gray-700 font-bold">Employment Status</span>
        <select
          value={employed}
          onChange={(e) => setEmployed(e.target.value)}
          className="form-select mt-1 block w-full"
          required
        >
          <option value="" disabled>Choose</option>
          <option value="fulltime">Fulltime</option>
          <option value="part-time">Part-time</option>
          <option value="self-employed">Self-employed</option>
          <option value="intern">Intern</option>
          <option value="student">Student</option>
          <option value="developer">Developer</option>
          <option value="contractor">Contractor</option>
          <option value="part-time">Part-time</option>
          <option value="freelance">Freelance</option>
          <option value="apprentice">Apprentice</option>
          <option value="temporary-worker">Temporary-worker</option>
          <option value="unemployed">Unemployed</option>
        </select>
      </label>
      <br/>
      <label className="block mb-2">
        <span className="text-gray-700 font-bold">Blockchain Specialization</span>
        <select
          value={blockchain}
          onChange={(e) => setBlockchain(e.target.value)}
          className="form-select mt-1 block w-full"
          required
        >
          <option value="" disabled>Choose</option>
          <option value="ethereum">Ethereum</option>
          <option value="filecoin">Filecoin</option>
          <option value="solana">Solana</option>
          <option value="corda">Corda</option>
          <option value="eosio">EOSIO</option>
          <option value="hyperledger-sawtooth">Hyperledger Sawtooth</option>
          <option value="hyperledger-fabric">Hyperledger Fabric</option>
        </select>
      </label>
      <br/>
      <label className="block mb-2">
        <span className="text-gray-700 font-bold">Country</span>
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="form-input mt-1 block w-full"
          placeholder="  Enter your country name"
          required
        />
      </label>
      <br/>
      <label className="block mb-2">
        <span className="text-gray-700 font-bold">Github URL</span>
        <input
          type="text"
          value={github}
          onChange={(e) => setGithub(e.target.value)}
          className="form-input mt-1 block w-full"
          placeholder="  Link to github"
          required
        />
      </label>
      <br/>
      <label className="block mb-2">
        <span className="text-gray-700 font-bold">Socials: Telegram | X Handle</span>
        <input
          type="text"
          value={social}
          onChange={(e) => setSocial(e.target.value)}
          className="form-input mt-1 block w-full"
          placeholder="  Telegram or X username e.g Telegram@Username"
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
          placeholder="  linkedin url"
          required
        />
      </label>
      <br/>
      <label className="block mb-2">
        <span className="text-gray-700 font-bold">Please tell us why you're interested in Hackathon 2024 </span>
        <input
          type="text"
          value={tellUsWhy}
          onChange={(e) => setTellusWhy(e.target.value)}
          className="form-input mt-1 block w-full"
          required
        />
        <hr/>
      </label>
      <br/>
      <label className="block mb-2">
        <span className="text-gray-700 font-md">Lagos Blockchain Week is committed to protecting and respecting your privacy, and we’ll only use your personal information to provide information on our products and services.</span>
        <input
          type="text"
          value={consent}
          onChange={(e) => setConsent(e.target.value)}
          className="form-input mt-1 block w-full"
          required
        />
        <hr/>
      </label>
      <label className="block mb-2">
        <input
          type="checkbox"
          checked={agree}
          onChange={() => setAgree(!agree)}
          className="mr-2 leading-tight"
          required
        />
        <span className="text-gray-700 font-md">I agree to receive other communications from Lagos Blockchain Week.</span>
      </label>
      <div className="bg-black rounded max-w-sm mx-auto flex justify-center">
      <button
        type="submit"
        className=" text-white p-2 hover:text-blue focus:outline-none focus:shadow-outline-blue active:bg-green-800">
        register
      </button>
      </div>
    </form>
  );
};

export default HackathonForm;