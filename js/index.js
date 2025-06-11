/* ========================= accordin menu ========================= */

const tabData = {
  general: {
    title: "GENERAL",
    items: [
      {
        question: "What is web hosting ?",
        answer: "Web hosting is a data storage service so that a website can be accessed online. This website data is stored in a storage space called a web hosting server which is always active 24 hours a day. The quality of web hosting services can determine the success of your business and all your website activities. Without a quality web hosting service, a website may not be accessed properly. Therefore, always use the best web hosting service for your website"
      },
      {
        question: "Why should I use Hostingly web hosting ?",
        answer: "Hostingly provides fast, secure, and user-friendly hosting with 24/7 support, free SSL, and guaranteed uptime for your website’s success."
      },
      {
        question: "If I already have a website, can I transfer my web hosting to Hostingly ?",
        answer: "Yes, you can transfer your website easily to Hostingly with our free migration service and zero downtime during the process."
      },
      {
        question: "Will all hosting purchases get a free domain?",
        answer: "Most of our hosting plans include a free domain name for the first year to help you get started without extra costs."
      }
    ]
  },
  service: {
    title: "SERVICE",
    items: [
      {
        question: "What services do you provide?",
        answer: "We offer reliable web hosting, domain name registration, custom email hosting, website backups, and expert 24/7 technical support."
      },
      {
        question: "Do you provide website migration?",
        answer: "Yes, we offer free website migration services to make your transition to our servers seamless and stress-free."
      },
      {
        question: "Is email hosting included?",
        answer: "Yes, most of our hosting plans include free professional email hosting with spam protection and easy integration."
      },
      {
        question: "Do you offer backup solutions?",
        answer: "We provide daily automated backups to ensure your website data is always secure and can be restored easily if needed."
      }
    ]
  },
  billing: {
    title: "BILLING",
    items: [
      {
        question: "How is the payment made?",
        answer: "You can make payments using credit or debit cards, PayPal, or secure bank transfers through our encrypted billing system."
      },
      {
        question: "Do you offer any money-back guarantee?",
        answer: "Yes, we offer a 30-day money-back guarantee if you’re not satisfied with our services for any reason."
      },
      {
        question: "Can I change my plan later?",
        answer: "Yes, you can upgrade or downgrade your hosting plan at any time through your control panel without losing any data."
      },
      {
        question: "Will I receive invoices automatically?",
        answer: "Yes, all invoices and billing statements will be emailed to you automatically and stored in your account for reference."
      }
    ]
  },
  safety: {
    title: "SAFETY",
    items: [
      {
        question: "What security measures do you take?",
        answer: "All data is encrypted using SSL technology, our servers are monitored around the clock, and we implement firewalls and regular security updates to protect your information."
      },
      {
        question: "Do you provide SSL certificates?",
        answer: "Yes, we provide free SSL certificates with all our hosting plans to ensure your website is secure and trusted by visitors."
      },
      {
        question: "Is DDoS protection included?",
        answer: "Yes, we include advanced DDoS protection on all our servers to guard against malicious traffic and keep your site online."
      },
      {
        question: "How do you handle data privacy?",
        answer: "We strictly follow data privacy laws and ensure all user information is stored securely and never shared without consent."
      }
    ]
  }
};

const tabsContainer = document.getElementById('tabs');
const accordionContainer = document.getElementById('accordion-container');

// Create tabs
Object.entries(tabData).forEach(([key, { title }], index) => {
  const btn = document.createElement('button');
  btn.className = 'tab' + (index === 0 ? ' active' : '');
  btn.dataset.tab = key;
  btn.textContent = title;
  tabsContainer.appendChild(btn);
});

// Create accordion sections
Object.entries(tabData).forEach(([key, { items }], sectionIndex) => {
  const section = document.createElement('div');
  section.className = 'accordion-section' + (sectionIndex === 0 ? ' active' : '');
  section.dataset.tab = key;

  items.forEach(({ question, answer }) => {
    const item = document.createElement('div');
    item.className = 'accordion-item';

    const header = document.createElement('button');
    header.className = 'accordion-header';
    header.innerHTML = `
      <img src="./images/questions-list/quesion-plus.svg">
      ${question}
    `;

    const content = document.createElement('div');
    content.className = 'accordion-content';
    content.textContent = answer;

    item.appendChild(header);
    item.appendChild(content);
    section.appendChild(item);
  });

  accordionContainer.appendChild(section);
});

// Tab switching
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.accordion-section').forEach(s => s.classList.remove('active'));

    tab.classList.add('active');
    document.querySelector(`.accordion-section[data-tab="${tab.dataset.tab}"]`).classList.add('active');
  });
});

// Accordion toggle + icon switching
document.addEventListener('click', function (e) {
  const header = e.target.closest('.accordion-header');
  if (!header) return;

  const item = header.parentElement;
  const section = item.parentElement;

  // Collapse others
  section.querySelectorAll('.accordion-item').forEach(i => {
    if (i !== item) i.classList.remove('active');
  });

  // Toggle this one
  item.classList.toggle('active');

  // Update all icons
  section.querySelectorAll('.accordion-item').forEach(i => {
    const img = i.querySelector('img');
    if (img) {
      img.src = i.classList.contains('active')
        ? './images/questions-list/quesion-minus.svg'
        : './images/questions-list/quesion-plus.svg';
    }
  });
});

/* ========================= end of accordion ========================= */