const FAQSection = () => {
    const faqs = [
      "What is the Placement Automation System?",
      "Who can use the Placement Automation System?",
      "How do I register for the system?",
      "What features does the Placement Automation System offer?",
      "Is there any cost associated with using the system?",
      "How can I contact support?",
    ];
  
    return (
      <div className="bg-[#FAF9F6] py-16 px-6 sm:px-10 lg:px-24">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-[#2E2E3A] mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-white shadow-lg rounded-lg p-4 transition duration-300 hover:shadow-2xl"
            >
              <summary className="text-lg sm:text-xl font-medium cursor-pointer text-[#2E2E3A] flex justify-between items-center">
                <span>{faq}</span>
                <span className="transform group-open:rotate-90 transition duration-300">
                  ▶
                </span>
              </summary>
              <p className="mt-4 text-sm sm:text-base text-gray-600">
                {/* Placeholder content */}
                This is where the detailed answer to this question will be
                displayed. Expand to read more about this topic.
              </p>
            </details>
          ))}
        </div>
      </div>
    );
  };
  
  export default FAQSection;
  