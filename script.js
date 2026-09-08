const navToggle=document.getElementById('navToggle');
const navLinks=document.getElementById('navLinks');
navToggle.addEventListener('click',()=>{const open=navLinks.classList.toggle('open');navToggle.setAttribute('aria-expanded',String(open));});
navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{navLinks.classList.remove('open');navToggle.setAttribute('aria-expanded','false');}));

document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.filter').forEach(b=>b.classList.toggle('active',b===btn));
  const target=btn.dataset.filter;
  document.querySelectorAll('.product-card').forEach(card=>card.classList.toggle('hidden',target!=='all'&&card.dataset.category!==target));
}));

const modal=document.getElementById('enquiryModal');
const interest=document.getElementById('productInterest');
const customerMessage=document.getElementById('customerMessage');
const prepared=document.getElementById('preparedMessage');
function openModal(){modal.classList.add('open');modal.setAttribute('aria-hidden','false');}
function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');}
document.querySelectorAll('[data-close-modal]').forEach(el=>el.addEventListener('click',closeModal));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();});

document.querySelectorAll('.inquiry-button').forEach(btn=>btn.addEventListener('click',()=>{
  const product=btn.dataset.product;
  interest.value=[...interest.options].some(o=>o.value===product)?product:interest.value;
  customerMessage.value=`I would like to know the current options, features and price range for ${product}.`;
  document.getElementById('contact').scrollIntoView({behavior:'smooth'});
}));

document.getElementById('enquiryForm').addEventListener('submit',e=>{
  e.preventDefault();
  const name=document.getElementById('customerName').value.trim();
  const phone=document.getElementById('customerPhone').value.trim();
  const product=interest.value;
  const requirement=customerMessage.value.trim();
  if(!/^\d{10}$/.test(phone)){document.getElementById('formStatus').textContent='Please enter a valid 10-digit mobile number.';return;}
  document.getElementById('formStatus').textContent='Enquiry message prepared.';
  prepared.value=`Hello Vimal Electronics,\n\nMy name is ${name}. I am interested in ${product}.\n${requirement?`Requirement: ${requirement}\n`:''}My contact number is ${phone}.\n\nPlease share current models, availability and pricing. Thank you.`;
  openModal();
});

document.getElementById('copyMessage').addEventListener('click',async()=>{
  try{await navigator.clipboard.writeText(prepared.value);document.getElementById('copyMessage').textContent='Copied';setTimeout(()=>document.getElementById('copyMessage').textContent='Copy message',1200);}catch{prepared.select();document.execCommand('copy');}
});

const advisorSuggestions={
  'living-room':{title:'Start with Smart TVs',questions:['What screen size suits my viewing distance?','Do I need 4K/HDR and which smart platform?','How many HDMI ports will I use?']},
  cooling:{title:'Start with a Split AC',questions:['What tonnage fits my room size and heat load?','What energy rating makes sense for my daily use?','What installation requirements should I plan for?']},
  'food-storage':{title:'Start with a Refrigerator',questions:['What capacity suits my household?','Do I need frost-free or convertible storage?','Will the dimensions fit my kitchen opening?']},
  laundry:{title:'Start with a Washing Machine',questions:['What capacity matches my normal laundry load?','Front-load or top-load for my available space?','Which wash programs and warranty matter most?']}
};
document.getElementById('advisorForm').addEventListener('submit',e=>{
  e.preventDefault();
  const need=document.getElementById('advisorNeed').value;
  const priority=document.getElementById('advisorPriority').value;
  const s=advisorSuggestions[need];
  const priorityText={value:'Ask for the best balance of essential features and price.',efficiency:'Prioritise energy rating and inverter technology where applicable.',features:'Compare smart/automatic features and connectivity.',space:'Measure the installation area first and ask for compact options.'}[priority];
  document.getElementById('advisorResult').innerHTML=`<strong>${s.title}</strong>${priorityText}<br><br>${s.questions.map(q=>`• ${q}`).join('<br>')}`;
});

document.querySelectorAll('#faqAccordion article button').forEach(btn=>btn.addEventListener('click',()=>{
  const article=btn.closest('article');
  const open=article.classList.toggle('open');
  btn.setAttribute('aria-expanded',String(open));
}));
