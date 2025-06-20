const LocationMap = () => {
  return (
    <div className="bg-white w-full">
      <iframe
        allowFullScreen={true}
        className="w-full"
        height="450"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62206.89005077939!2d80.24227836279044!3d12.976288798882537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d6eb4ede31f%3A0x1d3014a83b4e6bc1!2sLCS%20Controls%20Private%20Limited%20-%20Weighing%20Automation%20%7C%20Onboard%20Weighing%20System%20%7C%20Indicators%20%26%20Controller%20%7C%20BMI%20Scales%2CChennai!5e0!3m2!1sen!2sin!4v1749268989758!5m2!1sen!2sin"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default LocationMap;
