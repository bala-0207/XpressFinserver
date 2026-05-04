// =============================================================================
// Indian States/UTs and major cities — used by the lead form's cascading
// State → City dropdowns.
//
// This is a CURATED list of major cities (capitals, district HQs, commercial
// centres). It is not exhaustive — you can add or remove cities here without
// touching any component code.
//
// Tamil Nadu is intentionally more comprehensive (all 38 districts) since
// that is XpressFinserve's primary service area.
// =============================================================================

export const INDIAN_STATE_CITIES: Record<string, string[]> = {
  // ---------- States (28) ----------

  'Andhra Pradesh': [
    'Anantapur', 'Chittoor', 'Eluru', 'Guntur', 'Kadapa', 'Kakinada',
    'Kurnool', 'Machilipatnam', 'Nellore', 'Ongole', 'Rajahmundry',
    'Srikakulam', 'Tenali', 'Tirupati', 'Vijayawada', 'Visakhapatnam',
    'Vizianagaram',
  ],

  'Arunachal Pradesh': [
    'Along', 'Bomdila', 'Itanagar', 'Khonsa', 'Naharlagun', 'Pasighat',
    'Roing', 'Tawang', 'Tezu', 'Ziro',
  ],

  'Assam': [
    'Barpeta', 'Bongaigaon', 'Dibrugarh', 'Diphu', 'Goalpara', 'Guwahati',
    'Hailakandi', 'Jorhat', 'Karimganj', 'Nagaon', 'Silchar', 'Sivasagar',
    'Tezpur', 'Tinsukia',
  ],

  'Bihar': [
    'Arrah', 'Bagaha', 'Begusarai', 'Bhagalpur', 'Bihar Sharif', 'Buxar',
    'Chhapra', 'Darbhanga', 'Dehri', 'Gaya', 'Hajipur', 'Katihar',
    'Kishanganj', 'Motihari', 'Munger', 'Muzaffarpur', 'Nawada', 'Patna',
    'Purnia', 'Saharsa', 'Sasaram', 'Siwan',
  ],

  'Chhattisgarh': [
    'Ambikapur', 'Bhilai', 'Bilaspur', 'Champa', 'Dhamtari', 'Durg',
    'Jagdalpur', 'Janjgir', 'Korba', 'Mahasamund', 'Raigarh', 'Raipur',
    'Rajnandgaon',
  ],

  'Goa': [
    'Bicholim', 'Canacona', 'Curchorem', 'Mapusa', 'Margao', 'Panaji',
    'Pernem', 'Ponda', 'Quepem', 'Sanguem', 'Vasco da Gama',
  ],

  'Gujarat': [
    'Ahmedabad', 'Anand', 'Bharuch', 'Bhavnagar', 'Bhuj', 'Gandhidham',
    'Gandhinagar', 'Jamnagar', 'Junagadh', 'Mehsana', 'Morbi', 'Nadiad',
    'Navsari', 'Patan', 'Porbandar', 'Rajkot', 'Surat', 'Surendranagar',
    'Vadodara', 'Vapi', 'Veraval',
  ],

  'Haryana': [
    'Ambala', 'Bahadurgarh', 'Bhiwani', 'Faridabad', 'Gurugram', 'Hansi',
    'Hisar', 'Jind', 'Kaithal', 'Karnal', 'Narnaul', 'Palwal', 'Panchkula',
    'Panipat', 'Rewari', 'Rohtak', 'Sirsa', 'Sonipat', 'Thanesar',
    'Yamunanagar',
  ],

  'Himachal Pradesh': [
    'Bilaspur', 'Chamba', 'Dharamshala', 'Hamirpur', 'Kangra', 'Kullu',
    'Manali', 'Mandi', 'Nahan', 'Palampur', 'Shimla', 'Solan', 'Sundernagar',
    'Una',
  ],

  'Jharkhand': [
    'Bokaro', 'Chaibasa', 'Chirkunda', 'Deoghar', 'Dhanbad', 'Dumka',
    'Giridih', 'Hazaribagh', 'Jamshedpur', 'Jhumri Telaiya', 'Medininagar',
    'Phusro', 'Ramgarh', 'Ranchi', 'Sahibganj',
  ],

  'Karnataka': [
    'Bagalkot', 'Ballari', 'Belagavi', 'Bengaluru', 'Bidar', 'Chikkamagaluru',
    'Chitradurga', 'Davangere', 'Gadag', 'Hassan', 'Hospete', 'Hubli-Dharwad',
    'Kalaburagi', 'Karwar', 'Kolar', 'Mandya', 'Mangaluru', 'Mysuru',
    'Raichur', 'Robertsonpet', 'Shivamogga', 'Tumakuru', 'Udupi', 'Vijayapura',
  ],

  'Kerala': [
    'Alappuzha', 'Ernakulam', 'Idukki', 'Kannur', 'Kasaragod', 'Kochi',
    'Kollam', 'Kottayam', 'Kozhikode', 'Malappuram', 'Palakkad',
    'Pathanamthitta', 'Thiruvananthapuram', 'Thrissur', 'Wayanad',
  ],

  'Madhya Pradesh': [
    'Bhind', 'Bhopal', 'Burhanpur', 'Chhindwara', 'Damoh', 'Dewas', 'Guna',
    'Gwalior', 'Hoshangabad', 'Indore', 'Jabalpur', 'Khandwa', 'Khargone',
    'Mandsaur', 'Murwara (Katni)', 'Neemuch', 'Ratlam', 'Rewa', 'Sagar',
    'Satna', 'Shivpuri', 'Singrauli', 'Ujjain', 'Vidisha',
  ],

  'Maharashtra': [
    'Ahmednagar', 'Akola', 'Amravati', 'Aurangabad', 'Bhiwandi', 'Chandrapur',
    'Dhule', 'Ichalkaranji', 'Jalgaon', 'Jalna', 'Kalyan-Dombivli',
    'Kolhapur', 'Latur', 'Mira-Bhayandar', 'Mumbai', 'Nagpur', 'Nanded',
    'Nashik', 'Navi Mumbai', 'Panvel', 'Parbhani', 'Pune', 'Sangli',
    'Solapur', 'Thane', 'Ulhasnagar', 'Vasai-Virar',
  ],

  'Manipur': [
    'Bishnupur', 'Churachandpur', 'Imphal', 'Jiribam', 'Kakching',
    'Kangpokpi', 'Senapati', 'Tamenglong', 'Thoubal', 'Ukhrul',
  ],

  'Meghalaya': [
    'Baghmara', 'Jowai', 'Khliehriat', 'Mawkyrwat', 'Nongpoh', 'Nongstoin',
    'Resubelpara', 'Shillong', 'Tura', 'Williamnagar',
  ],

  'Mizoram': [
    'Aizawl', 'Champhai', 'Hnahthial', 'Kolasib', 'Lawngtlai', 'Lunglei',
    'Mamit', 'Saiha', 'Saitual', 'Serchhip',
  ],

  'Nagaland': [
    'Dimapur', 'Kiphire', 'Kohima', 'Longleng', 'Mokokchung', 'Mon', 'Peren',
    'Phek', 'Tuensang', 'Wokha', 'Zunheboto',
  ],

  'Odisha': [
    'Angul', 'Balasore', 'Bargarh', 'Baripada', 'Berhampur', 'Bhadrak',
    'Bhubaneswar', 'Cuttack', 'Dhenkanal', 'Jeypore', 'Jharsuguda',
    'Kendrapara', 'Paradip', 'Puri', 'Rayagada', 'Rourkela', 'Sambalpur',
    'Sundargarh',
  ],

  'Punjab': [
    'Abohar', 'Amritsar', 'Barnala', 'Bathinda', 'Faridkot', 'Firozpur',
    'Gurdaspur', 'Hoshiarpur', 'Jalandhar', 'Kapurthala', 'Khanna', 'Ludhiana',
    'Malerkotla', 'Moga', 'Mohali', 'Muktsar', 'Pathankot', 'Patiala',
    'Phagwara', 'Rajpura', 'Sangrur',
  ],

  'Rajasthan': [
    'Ajmer', 'Alwar', 'Banswara', 'Beawar', 'Bharatpur', 'Bhilwara', 'Bikaner',
    'Chittorgarh', 'Churu', 'Dholpur', 'Gangapur City', 'Hanumangarh', 'Jaipur',
    'Jodhpur', 'Kishangarh', 'Kota', 'Nagaur', 'Pali', 'Pratapgarh',
    'Sawai Madhopur', 'Sikar', 'Sri Ganganagar', 'Tonk', 'Udaipur',
  ],

  'Sikkim': [
    'Gangtok', 'Geyzing (Gyalshing)', 'Jorethang', 'Mangan', 'Namchi',
    'Pakyong', 'Rangpo', 'Singtam',
  ],

  'Tamil Nadu': [
    'Ambur', 'Ariyalur', 'Chengalpattu', 'Chennai', 'Coimbatore', 'Cuddalore',
    'Dharmapuri', 'Dindigul', 'Erode', 'Hosur', 'Kallakurichi', 'Kanchipuram',
    'Kanyakumari', 'Karaikkudi', 'Karur', 'Krishnagiri', 'Kumbakonam',
    'Madurai', 'Mayiladuthurai', 'Nagapattinam', 'Nagercoil', 'Namakkal',
    'Perambalur', 'Pollachi', 'Pudukkottai', 'Rajapalayam', 'Ranipet', 'Salem',
    'Sivakasi', 'Tenkasi', 'Thanjavur', 'Theni', 'Thoothukudi',
    'Tiruchirappalli (Trichy)', 'Tirunelveli', 'Tirupathur', 'Tiruppur',
    'Tiruvallur', 'Tiruvannamalai', 'Vellore', 'Villupuram', 'Virudhunagar',
  ],

  'Telangana': [
    'Adilabad', 'Hyderabad', 'Jagityal', 'Karimnagar', 'Khammam',
    'Mahbubnagar', 'Mancherial', 'Miryalaguda', 'Nalgonda', 'Nizamabad',
    'Ramagundam', 'Siddipet', 'Suryapet', 'Warangal',
  ],

  'Tripura': [
    'Agartala', 'Ambassa', 'Belonia', 'Dharmanagar', 'Kailasahar', 'Khowai',
    'Sabroom', 'Sonamura', 'Teliamura', 'Udaipur',
  ],

  'Uttar Pradesh': [
    'Agra', 'Aligarh', 'Allahabad (Prayagraj)', 'Azamgarh', 'Ballia', 'Banda',
    'Barabanki', 'Bareilly', 'Basti', 'Bijnor', 'Bulandshahr', 'Deoria',
    'Etah', 'Etawah', 'Faizabad', 'Farrukhabad', 'Fatehpur', 'Firozabad',
    'Ghaziabad', 'Ghazipur', 'Gonda', 'Gorakhpur', 'Greater Noida', 'Hapur',
    'Hardoi', 'Hathras', 'Jaunpur', 'Jhansi', 'Kanpur', 'Kasganj',
    'Lakhimpur', 'Lalitpur', 'Lucknow', 'Mainpuri', 'Mathura', 'Mau', 'Meerut',
    'Mirzapur', 'Modinagar', 'Moradabad', 'Muzaffarnagar', 'Noida', 'Orai',
    'Pilibhit', 'Raebareli', 'Rampur', 'Saharanpur', 'Sambhal', 'Shahjahanpur',
    'Shamli', 'Sitapur', 'Sultanpur', 'Unnao', 'Varanasi',
  ],

  'Uttarakhand': [
    'Almora', 'Dehradun', 'Haldwani', 'Haridwar', 'Kashipur', 'Manglaur',
    'Mussoorie', 'Nainital', 'Pauri', 'Pithoragarh', 'Ramnagar', 'Rishikesh',
    'Roorkee', 'Rudrapur', 'Tehri',
  ],

  'West Bengal': [
    'Asansol', 'Balurghat', 'Bankura', 'Baranagar', 'Barasat',
    'Bardhaman (Burdwan)', 'Basirhat', 'Berhampore', 'Bidhannagar (Salt Lake)',
    'Bongaon', 'Chandannagar', 'Cooch Behar', 'Dum Dum', 'Durgapur',
    'English Bazar (Malda)', 'Habra', 'Haldia', 'Howrah', 'Hugli-Chinsurah',
    'Jalpaiguri', 'Jangipur', 'Kalyani', 'Kharagpur', 'Kolkata', 'Krishnanagar',
    'Madhyamgram', 'Maheshtala', 'Medinipur', 'Nabadwip', 'Naihati',
    'Panihati', 'Raiganj', 'Rajpur Sonarpur', 'Rishra', 'Siliguri',
    'South Dum Dum',
  ],

  // ---------- Union Territories (8) ----------

  'Andaman and Nicobar Islands': [
    'Car Nicobar', 'Diglipur', 'Hut Bay', 'Mayabunder', 'Port Blair', 'Rangat',
  ],

  'Chandigarh': ['Chandigarh'],

  'Dadra and Nagar Haveli and Daman and Diu': [
    'Dadra', 'Daman', 'Diu', 'Khanvel', 'Silvassa',
  ],

  'Delhi': [
    'Delhi', 'Dwarka', 'Karol Bagh', 'Lajpat Nagar', 'Mayur Vihar', 'Najafgarh',
    'Narela', 'New Delhi', 'Pitampura', 'Rohini', 'Saket', 'Vasant Kunj',
  ],

  'Jammu and Kashmir': [
    'Anantnag', 'Baramulla', 'Budgam', 'Doda', 'Jammu', 'Kathua', 'Kishtwar',
    'Kupwara', 'Pulwama', 'Punch', 'Rajouri', 'Sopore', 'Srinagar', 'Udhampur',
  ],

  'Ladakh': ['Drass', 'Kargil', 'Khalsi', 'Leh', 'Nubra', 'Zanskar'],

  'Lakshadweep': [
    'Agatti', 'Amini', 'Andrott', 'Kalpeni', 'Kavaratti', 'Minicoy',
  ],

  'Puducherry': [
    'Ariyankuppam', 'Bahour', 'Karaikal', 'Mahe', 'Puducherry', 'Villianur',
    'Yanam',
  ],
}

// Sorted state list — used to populate the State dropdown.
export const INDIAN_STATES = Object.keys(INDIAN_STATE_CITIES).sort()

// Helper — returns the city list for a given state (empty array if unknown).
export function getCitiesForState(state: string): string[] {
  return INDIAN_STATE_CITIES[state] ?? []
}
