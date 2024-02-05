import { useState } from 'react';

const RegisterationForm = () => {
    const [name, setName] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('');
    const [social, setSocial] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [events, setEvents] = useState([]);
    const [feedback, setFeedback] = useState('');
    const [consent, setConsent] = useState(false);
    const [agree, setAgree] = useState(false);

    const handleCheckboxChange = (selectedEvent) => {
      // Check if the event is already selected
      const isEventSelected = events.includes(selectedEvent);
  
      // Update the state based on whether the event was selected or deselected
      setEvents((prevEvents) => {
        if (isEventSelected) {
          // If the event was selected, remove it from the array
          return prevEvents.filter((event) => event !== selectedEvent);
        } else {
          // If the event was not selected, add it to the array
          return [...prevEvents, selectedEvent];
        }
      });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!agree) {
            alert("Please acknowlwdge to receive communication from us.");
            return;
          }
    
        // Send data to database
        const formData = new FormData();
        formData.append('Name', name);
        formData.append('Job Title', jobTitle);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('country', country);
        // Append each selected event to the formData
        events.forEach((selectedEvent) => {
          formData.append('Which events will you be attending', selectedEvent);
        });
        formData.append('telegram | X', social);
        formData.append('linkedin', linkedin);
        formData.append('feedback', feedback);
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
              // send acknowledgement mail
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
                <span className="font-bold underline"> #LBW2024 Events Registration</span>
                <p className='text-sm'>Register for events in the Lagos Blockchain Week</p>
            </label>
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
                <span className="text-gray-700 font-bold">Job title:</span>
                <input
                  type="text"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  className="form-input mt-1 block w-full"
                  placeholder="  enter your Job title"
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
            {/* <label className="block mb-2"> 
            <span className="text-gray-700 font-bold">Which events will you be attending</span><br/>
                /* <input
                 type="checkbox"
                 value={events}
                 onChange={(e) => setEvents(e.target.value)}
                 className="mr-2 leading-tight"
                />
                <span className="text-gray-700 font-md">Crypto 101 Conference</span><br/>
                <input
                 type="checkbox"
                 value={events}
                 onChange={(e) => setEvents(e.target.value)}
                 className="mr-2 leading-tight"
                />
                <span className="text-gray-700 font-md">Creator Convergence Expo</span><br/>
                <input
                 type="checkbox"
                 value={events}
                 onChange={(e) => setEvents(e.target.value)}
                 className="mr-2 leading-tight"
                />
                <span className="text-gray-700 font-md">Innovation Across Borders</span><br/>
                <input
                 type="checkbox"
                 value={events}
                 onChange={(e) => setEvents(e.target.value)}
                 className="mr-2 leading-tight"
                />
                <span className="text-gray-700 font-md">DWeb Storage Expo</span><br/>
                <input
                 type="checkbox"
                 value={events}
                 onChange={(e) => setEvents(e.target.value)}
                 className="mr-2 leading-tight"
                />
                <span className="text-gray-700 font-md">Web3 BuiDLers Workshop</span><br/>
                <input
                 type="checkbox"
                 value={events}
                 onChange={(e) => setEvents(e.target.value)}
                 className="mr-2 leading-tight"
                />
                <span className="text-gray-700 font-md">Web3 BuiDLers Submit</span>
            </label> */}
            <br/>
            <label className="block mb-2">
              <span className="text-gray-700 font-bold">Which events will you be attending</span><br/>
              {['Crypto 101 Conference', 'Creator Convergence Expo', 'Innovation Across Borders', 'DWeb Storage Expo', 'Web3 BuiDLers Workshop', 'Web3 BuiDLers Submit'].map(
                (event) => (
                <div key={event}>
                  <input
                    type="checkbox"
                    value={event}
                    onChange={() => handleCheckboxChange(event)}
                    checked={events.includes(event)}
                    className="mr-2 leading-tight"
                  />
                  <span className="text-gray-700 font-md">{event}</span>
                  <br />
                </div>
              )
            )}
            </label>
            <br/>
            <label className="block mb-2">
                <span className="text-gray-700 font-bold">Telegram | X handle:</span>
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
                <span className="text-gray-700 font-bold">LinkedIn url</span>
                <input
                  type="text"
                  value={linkedin}
                  onChange={(e) => setLinkedin(e.target.value)}
                  className="form-input mt-1 block w-full"
                  placeholder=" Your country Name"
                />
            </label>
            <br/>
            <label className="block mb-2">
                <span className="text-gray-700 font-bold">Feedback/Expectations/recommendation:</span>
                <input
                  type="text"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  className="form-input mt-1 block w-full"
                  required
                />
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

export default RegisterationForm;