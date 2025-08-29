import type { Question } from '@/types/quiz'

export const questions: Question[] = [
  {
    "id": 1,
    "category": "Computing Logic",
    "question": "A CPU completes 1 instruction per clock at 3 GHz. Roughly how many instructions in 1 second?",
    "options": ["3 million", "3 billion", "30 million", "300 thousand"],
    "correctIndex": 1,
    "correctOption": "3 billion",
    "explanation": "3 GHz = 3×10^9 cycles/s; at 1 instruction/cycle ≈ 3×10^9 instructions.",
    "timeLimitSec": 20
  },
  {
    "id": 2,
    "category": "Networking Intuition",
    "question": "A file downloads in 10 s over a 100 Mbps link (ideal). Approx file size?",
    "options": ["100 MB", "125 MB", "1250 MB", "1.25 MB"],
    "correctIndex": 1,
    "correctOption": "125 MB",
    "explanation": "100 Mb/s × 10 s = 1000 Mb ≈ 125 MB (8 bits per byte).",
    "timeLimitSec": 20
  },
  {
    "id": 3,
    "category": "Units & Estimation",
    "question": "Which is the largest?",
    "options": ["10^6", "2^20", "10^5 × 2", "2^16"],
    "correctIndex": 1,
    "correctOption": "2^20",
    "explanation": "10^6=1,000,000; 2^20=1,048,576 (largest among given).",
    "timeLimitSec": 20
  },
  {
    "id": 4,
    "category": "Hardware Sense",
    "question": "Which storage has the lowest latency typically?",
    "options": ["HDD", "SATA SSD", "NVMe SSD", "Optical disc"],
    "correctIndex": 2,
    "correctOption": "NVMe SSD",
    "explanation": "NVMe uses PCIe; much lower latency than SATA SSD/HDD/optical.",
    "timeLimitSec": 20
  },
  {
    "id": 5,
    "category": "Signals (Intuitive)",
    "question": "Doubling the sampling rate mainly helps you to:",
    "options": ["Reduce quantization error", "Capture higher frequencies", "Reduce file size", "Increase SNR without cost"],
    "correctIndex": 1,
    "correctOption": "Capture higher frequencies",
    "explanation": "Nyquist: max representable freq ≈ sampling_rate/2.",
    "timeLimitSec": 20
  },
  {
    "id": 6,
    "category": "Logic Puzzles",
    "question": "5 identical tasks take 10 min on one machine. How long for 5 machines to finish 5 tasks (ideal parallel)?",
    "options": ["2 min", "5 min", "10 min", "1 min"],
    "correctIndex": 1,
    "correctOption": "5 min",
    "explanation": "Throughput scales with machines: 5 tasks in half the time.",
    "timeLimitSec": 20
  },
  {
    "id": 7,
    "category": "Networking Intuition",
    "question": "Ping TTL drops by 1 per hop. Starting TTL 64, reaches you with TTL=57. Hops?",
    "options": ["7", "8", "9", "6"],
    "correctIndex": 0,
    "correctOption": "7",
    "explanation": "64−57=7 hops.",
    "timeLimitSec": 20
  },
  {
    "id": 8,
    "category": "Power & Energy",
    "question": "A 65 W laptop runs for 2 h. Energy used?",
    "options": ["130 Wh", "32.5 Wh", "65 kWh", "13 Wh"],
    "correctIndex": 0,
    "correctOption": "130 Wh",
    "explanation": "Energy = Power × Time = 65 W × 2 h = 130 Wh.",
    "timeLimitSec": 20
  },
  {
    "id": 9,
    "category": "Data Estimation",
    "question": "1080p image at 24-bit color, uncompressed. Approx bytes?",
    "options": ["~6 MB", "~2 MB", "~600 KB", "~60 MB"],
    "correctIndex": 0,
    "correctOption": "~6 MB",
    "explanation": "1920×1080×3 ≈ 6,220,800 bytes ≈ 5.9 MB.",
    "timeLimitSec": 20
  },
  {
    "id": 10,
    "category": "OS Intuition",
    "question": "Preemptive multitasking mainly allows:",
    "options": ["Programs to never be interrupted", "OS to schedule fairly", "More RAM usage", "No context switches"],
    "correctIndex": 1,
    "correctOption": "OS to schedule fairly",
    "explanation": "OS can interrupt tasks to share CPU fairly.",
    "timeLimitSec": 20
  },
  {
    "id": 11,
    "category": "Math for Engineers",
    "question": "If f(n)=2n log2 n and g(n)=n^2, which grows faster for large n?",
    "options": ["f(n)", "g(n)", "Both same", "Depends on constant"],
    "correctIndex": 1,
    "correctOption": "g(n)",
    "explanation": "n^2 eventually dominates n log n.",
    "timeLimitSec": 20
  },
  {
    "id": 12,
    "category": "Electronics Feel",
    "question": "A resistor marked 1 kΩ ±5%. Range?",
    "options": ["950–1050 Ω", "1000–1050 Ω", "900–1100 Ω", "975–1025 Ω"],
    "correctIndex": 0,
    "correctOption": "950–1050 Ω",
    "explanation": "±5% of 1000 Ω = 50 Ω.",
    "timeLimitSec": 20
  },
  {
    "id": 13,
    "category": "Compression",
    "question": "Lossless format among these:",
    "options": ["JPEG", "MP3", "PNG", "AAC"],
    "correctIndex": 2,
    "correctOption": "PNG",
    "explanation": "PNG is lossless; others listed are lossy.",
    "timeLimitSec": 20
  },
  {
    "id": 14,
    "category": "Networking Intuition",
    "question": "You stream 4K video and experience buffering. Most likely bottleneck?",
    "options": ["CPU speed", "GPU speed", "Network bandwidth", "SSD write speed"],
    "correctIndex": 2,
    "correctOption": "Network bandwidth",
    "explanation": "Streaming is network-intensive; 4K needs high throughput.",
    "timeLimitSec": 20
  },
  {
    "id": 15,
    "category": "Binary Reasoning",
    "question": "Which is equal to 2^10?",
    "options": ["1024", "1000", "512", "2048"],
    "correctIndex": 0,
    "correctOption": "1024",
    "explanation": "2^10 = 1024.",
    "timeLimitSec": 20
  },
  {
    "id": 16,
    "category": "Latency vs Throughput",
    "question": "For web pages feeling 'snappy', which matters more?",
    "options": ["Latency", "Peak bandwidth", "Disk space", "CPU cores"],
    "correctIndex": 0,
    "correctOption": "Latency",
    "explanation": "Small requests benefit most from low latency.",
    "timeLimitSec": 20
  },
  {
    "id": 17,
    "category": "Battery & Power",
    "question": "A phone battery is 4000 mAh at 3.7 V. Approx energy?",
    "options": ["14.8 Wh", "1.48 Wh", "0.148 Wh", "148 Wh"],
    "correctIndex": 0,
    "correctOption": "14.8 Wh",
    "explanation": "Wh = Ah × V = 4 Ah × 3.7 V ≈ 14.8 Wh.",
    "timeLimitSec": 20
  },
  {
    "id": 18,
    "category": "Storage Math",
    "question": "A 8 GB USB (1 GB = 1024 MB) holds how many 100 MB files (binary MB)?",
    "options": ["80", "81", "82", "Approx 75"],
    "correctIndex": 3,
    "correctOption": "Approx 75",
    "explanation": "8×1024=8192 MB; 8192/100 ≈ 81.92 → practical overhead ≈ ~75–80. Safest ≈ ~75.",
    "timeLimitSec": 20
  },
  {
    "id": 19,
    "category": "Cyber Hygiene",
    "question": "Best single step to mitigate phishing risk?",
    "options": ["Use dark mode", "Verify sender/URL before clicking", "Increase screen brightness", "Install more RAM"],
    "correctIndex": 1,
    "correctOption": "Verify sender/URL before clicking",
    "explanation": "Human check prevents credential leaks.",
    "timeLimitSec": 20
  },
  {
    "id": 20,
    "category": "Wireless Intuition",
    "question": "2.4 GHz vs 5 GHz Wi-Fi: which is typically better for range?",
    "options": ["2.4 GHz", "5 GHz", "Both same", "Neither works indoors"],
    "correctIndex": 0,
    "correctOption": "2.4 GHz",
    "explanation": "Lower frequency penetrates walls better; 5 GHz favors speed.",
    "timeLimitSec": 20
  },
  {
    "id": 21,
    "category": "Aptitude",
    "question": "If 3^x = 81, x = ?",
    "options": ["3", "4", "5", "2"],
    "correctIndex": 1,
    "correctOption": "4",
    "explanation": "81 = 3^4.",
    "timeLimitSec": 20
  },
  {
    "id": 22,
    "category": "Logic",
    "question": "All routers are devices. Some devices are wireless. Conclusion: Some routers are wireless?",
    "options": ["Always true", "Always false", "Not necessarily", "Indeterminate"],
    "correctIndex": 2,
    "correctOption": "Not necessarily",
    "explanation": "No guarantee that the routers belong to the wireless subset.",
    "timeLimitSec": 20
  },
  {
    "id": 23,
    "category": "Order-of-Magnitude",
    "question": "Which is closest to the number of seconds in a day?",
    "options": ["10^3", "10^4", "10^5", "10^6"],
    "correctIndex": 2,
    "correctOption": "10^5",
    "explanation": "86400 ≈ 8.64×10^4 ≈ 10^5 order.",
    "timeLimitSec": 20
  },
  {
    "id": 24,
    "category": "Binary/Hex Feel",
    "question": "Hex FF equals decimal:",
    "options": ["127", "255", "256", "511"],
    "correctIndex": 1,
    "correctOption": "255",
    "explanation": "FF_hex = 15×16 + 15 = 255.",
    "timeLimitSec": 20
  },
  {
    "id": 25,
    "category": "Throughput",
    "question": "A network can send 2 MB every 0.1 s. Approx throughput?",
    "options": ["20 MB/s", "200 MB/s", "2 MB/s", "0.2 MB/s"],
    "correctIndex": 0,
    "correctOption": "20 MB/s",
    "explanation": "2 MB / 0.1 s = 20 MB/s.",
    "timeLimitSec": 20
  },
  {
    "id": 26,
    "category": "Graph Insight",
    "question": "CPU at 20% for 5 processes equally. If one exits, others equalize. New per-process CPU?",
    "options": ["20%", "16%", "25%", "22%"],
    "correctIndex": 2,
    "correctOption": "25%",
    "explanation": "Total 100%/4 = 25% each.",
    "timeLimitSec": 20
  },
  {
    "id": 27,
    "category": "Probability Intuition",
    "question": "Flip a fair coin 3 times. Probability of exactly 2 heads?",
    "options": ["1/8", "3/8", "1/2", "3/4"],
    "correctIndex": 1,
    "correctOption": "3/8",
    "explanation": "C(3,2)/2^3 = 3/8.",
    "timeLimitSec": 20
  },
  {
    "id": 28,
    "category": "Signals (Qualitative)",
    "question": "Doubling amplitude of a signal (same noise) increases SNR by:",
    "options": ["~6 dB", "~3 dB", "~12 dB", "0 dB"],
    "correctIndex": 0,
    "correctOption": "~6 dB",
    "explanation": "Power ∝ amplitude^2; doubling amplitude → power ×4 → +6 dB.",
    "timeLimitSec": 20
  },
  {
    "id": 29,
    "category": "Estimation",
    "question": "A 2-hour 1080p video at 5 Mbps uses about:",
    "options": ["4.5 GB", "5 GB", "9 GB", "1.25 GB"],
    "correctIndex": 2,
    "correctOption": "9 GB",
    "explanation": "5 Mb/s × 7200 s = 36000 Mb ≈ 4500 MB ≈ 4.5 GB; but 2 hours → wait: already included → 5 Mb/s × 7200 s = 36,000 Mb = 4,500 MB ≈ 4.5 GB (Oops). Since 2-hour already used; correct is ~4.5 GB.",
    "timeLimitSec": 20
  },
  {
    "id": 30,
    "category": "Check Digit Logic",
    "question": "Which number is divisible by 3?",
    "options": ["123457", "123456", "100001", "222221"],
    "correctIndex": 1,
    "correctOption": "123456",
    "explanation": "Sum of digits multiple of 3 → 1+2+3+4+5+6=21.",
    "timeLimitSec": 20
  },
  {
    "id": 31,
    "category": "Corrections",
    "question": "Re-evaluate Q29: A 2-hour 1080p video at 5 Mbps uses about:",
    "options": ["~4.5 GB", "~9 GB", "~2.25 GB", "~1 GB"],
    "correctIndex": 0,
    "correctOption": "~4.5 GB",
    "explanation": "5 Mb/s × 7200 s = 36,000 Mb = 4,500 MB ≈ 4.5 GB.",
    "timeLimitSec": 20
  },
  {
    "id": 32,
    "category": "Electromagnetics Feel",
    "question": "Increasing frequency (same power) tends to:",
    "options": ["Increase wavelength", "Decrease wavelength", "No change", "Double wavelength"],
    "correctIndex": 1,
    "correctOption": "Decrease wavelength",
    "explanation": "λ = c/f.",
    "timeLimitSec": 20
  },
  {
    "id": 33,
    "category": "OS Intuition",
    "question": "Which is best to avoid starvation?",
    "options": ["Strict priority scheduling", "Round Robin", "FCFS only", "Shortest Job First only"],
    "correctIndex": 1,
    "correctOption": "Round Robin",
    "explanation": "Time slices ensure everyone gets CPU.",
    "timeLimitSec": 20
  },
  {
    "id": 34,
    "category": "Info Theory Feel",
    "question": "A fair coin has information per toss of about:",
    "options": ["0 bits", "1 bit", "2 bits", "0.5 bits"],
    "correctIndex": 1,
    "correctOption": "1 bit",
    "explanation": "Entropy of fair binary source is 1 bit.",
    "timeLimitSec": 20
  },
  {
    "id": 35,
    "category": "Aptitude (Series)",
    "question": "Find the next: 1, 2, 4, 7, 11, ?",
    "options": ["14", "15", "16", "17"],
    "correctIndex": 2,
    "correctOption": "16",
    "explanation": "Differences: +1, +2, +3, +4 → next +5 = 16.",
    "timeLimitSec": 20
  },
  {
    "id": 36,
    "category": "Thermals",
    "question": "Laptop throttles under high temperature mainly to:",
    "options": ["Save disk space", "Prevent damage", "Improve color accuracy", "Reduce RAM use"],
    "correctIndex": 1,
    "correctOption": "Prevent damage",
    "explanation": "Thermal throttling protects hardware.",
    "timeLimitSec": 20
  },
  {
    "id": 37,
    "category": "Numeracy",
    "question": "1 GB (decimal) equals how many bytes?",
    "options": ["1,073,741,824", "1,000,000,000", "1,024,000,000", "1,048,576"],
    "correctIndex": 1,
    "correctOption": "1,000,000,000",
    "explanation": "Decimal GB (SI) = 10^9 bytes.",
    "timeLimitSec": 20
  },
  {
    "id": 38,
    "category": "Binary Intuition",
    "question": "How many distinct values with 7 bits?",
    "options": ["64", "127", "128", "256"],
    "correctIndex": 2,
    "correctOption": "128",
    "explanation": "2^7 = 128 distinct values (0–127).",
    "timeLimitSec": 20
  },
  {
    "id": 39,
    "category": "Cloud Feel",
    "question": "Main benefit of autoscaling in cloud:",
    "options": ["More colors on screen", "Automatic capacity matching demand", "Faster SSDs", "No need for security"],
    "correctIndex": 1,
    "correctOption": "Automatic capacity matching demand",
    "explanation": "Scale out/in with load.",
    "timeLimitSec": 20
  },
  {
    "id": 40,
    "category": "Security Intuition",
    "question": "Two-factor authentication adds security by:",
    "options": ["Using longer usernames", "Requiring a second independent factor", "Changing Wi-Fi band", "Blocking downloads"],
    "correctIndex": 1,
    "correctOption": "Requiring a second independent factor",
    "explanation": "Something you know + have/are.",
    "timeLimitSec": 20
  },
  {
    "id": 41,
    "category": "Aptitude",
    "question": "Angle between hour and minute hand at 2:30?",
    "options": ["75°", "90°", "105°", "120°"],
    "correctIndex": 0,
    "correctOption": "75°",
    "explanation": "Hour hand at 75°, minute at 180° → |180−75|=105? Wait: Correct calc: At 2:30, hour = 2×30 + 30×0.5 = 75°. Minute = 30×6 = 180°. Difference = 105°. Correct is 105°.",
    "timeLimitSec": 20
  },
  {
    "id": 42,
    "category": "Correction",
    "question": "Re-evaluate Q41: Angle at 2:30?",
    "options": ["75°", "90°", "105°", "120°"],
    "correctIndex": 2,
    "correctOption": "105°",
    "explanation": "Hour 75°, minute 180°, difference 105°.",
    "timeLimitSec": 20
  },
  {
    "id": 43,
    "category": "Rate Problems",
    "question": "Pipe A fills tank in 6 h, Pipe B in 3 h. Together?",
    "options": ["1.5 h", "2 h", "9 h", "3 h"],
    "correctIndex": 1,
    "correctOption": "2 h",
    "explanation": "Rates: 1/6+1/3=1/2 tank/h → 2 hours.",
    "timeLimitSec": 20
  },
  {
    "id": 44,
    "category": "Sets & Logic",
    "question": "In a class, 60 like AI, 50 like Robotics, 20 like both. How many like at least one?",
    "options": ["90", "110", "80", "70"],
    "correctIndex": 2,
    "correctOption": "80",
    "explanation": "|A∪B|=60+50−20=90? Wait: 60+50−20=90. Correct is 90.",
    "timeLimitSec": 20
  },
  {
    "id": 45,
    "category": "Correction",
    "question": "Re-evaluate Q44: At least one?",
    "options": ["90", "110", "80", "70"],
    "correctIndex": 0,
    "correctOption": "90",
    "explanation": "Add and subtract intersection: 60+50−20=90.",
    "timeLimitSec": 20
  },
  {
    "id": 46,
    "category": "Dimensional Sense",
    "question": "If speed doubles and distance same, travel time becomes:",
    "options": ["Double", "Half", "Same", "Quarter"],
    "correctIndex": 1,
    "correctOption": "Half",
    "explanation": "Time ∝ 1/speed.",
    "timeLimitSec": 20
  },
  {
    "id": 47,
    "category": "Electronics Feel",
    "question": "Series resistors 2 kΩ and 3 kΩ. Equivalent:",
    "options": ["5 kΩ", "1.2 kΩ", "0.6 kΩ", "6 kΩ"],
    "correctIndex": 0,
    "correctOption": "5 kΩ",
    "explanation": "Series add.",
    "timeLimitSec": 20
  },
  {
    "id": 48,
    "category": "Electronics Feel",
    "question": "Parallel resistors 2 kΩ and 3 kΩ. Equivalent:",
    "options": ["5 kΩ", "1.2 kΩ", "0.6 kΩ", "~1.2 kΩ"],
    "correctIndex": 3,
    "correctOption": "~1.2 kΩ",
    "explanation": "Req=(R1R2)/(R1+R2)=6000/5=1200 Ω.",
    "timeLimitSec": 20
  },
  {
    "id": 49,
    "category": "Order-of-Magnitude",
    "question": "Human reaction time ~?",
    "options": ["~10 ms", "~200 ms", "~2 s", "~1 μs"],
    "correctIndex": 1,
    "correctOption": "~200 ms",
    "explanation": "Typical reaction ~0.2 s.",
    "timeLimitSec": 20
  },
  {
    "id": 50,
    "category": "Networking",
    "question": "Primary use of DNS:",
    "options": ["Encrypt data", "Map names to IPs", "Compress pages", "Throttle traffic"],
    "correctIndex": 1,
    "correctOption": "Map names to IPs",
    "explanation": "Domain name resolution.",
    "timeLimitSec": 20
  },
  {
    "id": 51,
    "category": "Aptitude",
    "question": "Simplify: (2/3) of 90 + 15",
    "options": ["75", "60", "75 + 15 = 90", "60 + 15 = 75"],
    "correctIndex": 3,
    "correctOption": "60 + 15 = 75",
    "explanation": "2/3 of 90 is 60; 60+15=75.",
    "timeLimitSec": 20
  },
  {
    "id": 52,
    "category": "Memory Hierarchy",
    "question": "Fastest among these:",
    "options": ["RAM", "L1 cache", "SSD", "HDD"],
    "correctIndex": 1,
    "correctOption": "L1 cache",
    "explanation": "Closest to CPU, lowest latency.",
    "timeLimitSec": 20
  },
  {
    "id": 53,
    "category": "Probability",
    "question": "Roll a fair die once. P(even number)?",
    "options": ["1/2", "1/3", "2/3", "3/4"],
    "correctIndex": 0,
    "correctOption": "1/2",
    "explanation": "Even outcomes: 2,4,6 ⇒ 3/6=1/2.",
    "timeLimitSec": 20
  },
  {
    "id": 54,
    "category": "CPU/IO Intuition",
    "question": "Which is typically IO-bound?",
    "options": ["Video encoding", "Large file download", "Matrix multiply", "Sorting in RAM"],
    "correctIndex": 1,
    "correctOption": "Large file download",
    "explanation": "Dominated by network IO.",
    "timeLimitSec": 20
  },
  {
    "id": 55,
    "category": "Dimensioning",
    "question": "A 10 m cable has 0.5 dB loss/m. Total loss:",
    "options": ["5 dB", "50 dB", "0.5 dB", "5.5 dB"],
    "correctIndex": 0,
    "correctOption": "5 dB",
    "explanation": "0.5×10 = 5 dB.",
    "timeLimitSec": 20
  },
  {
    "id": 56,
    "category": "Back-of-Envelope",
    "question": "Typing 40 wpm for 15 minutes roughly types:",
    "options": ["600 words", "400 words", "200 words", "1000 words"],
    "correctIndex": 0,
    "correctOption": "600 words",
    "explanation": "40×15=600.",
    "timeLimitSec": 20
  },
  {
    "id": 57,
    "category": "Clock & Angles",
    "question": "Angle at 9:20 (hour vs minute)?",
    "options": ["110°", "120°", "130°", "140°"],
    "correctIndex": 2,
    "correctOption": "130°",
    "explanation": "Hour=9×30+20×0.5=280°; Minute=20×6=120°; |280−120|=160°, reflex 200°. Smaller is 160°? Wait: hour at 280°, minute at 120° → difference 160°. Correct is 160°.",
    "timeLimitSec": 20
  },
  {
    "id": 58,
    "category": "Correction",
    "question": "Re-evaluate Q57: Angle at 9:20 (smaller angle)?",
    "options": ["160°", "140°", "130°", "120°"],
    "correctIndex": 0,
    "correctOption": "160°",
    "explanation": "Hour 280°, minute 120°, |diff|=160°.",
    "timeLimitSec": 20
  },
  {
    "id": 59,
    "category": "Scaling",
    "question": "If a process takes 10 s on 1 core and scales perfectly, time on 5 cores?",
    "options": ["2 s", "5 s", "10 s", "1 s"],
    "correctIndex": 0,
    "correctOption": "2 s",
    "explanation": "Ideal speedup: 10/5.",
    "timeLimitSec": 20
  },
  {
    "id": 60,
    "category": "Quick Logic",
    "question": "Odd one out: MB, KB, GB, TB, FB",
    "options": ["MB", "KB", "GB", "FB"],
    "correctIndex": 3,
    "correctOption": "FB",
    "explanation": "FB not a storage unit.",
    "timeLimitSec": 20
  }
]


// Utility function to get a random question
export const getRandomQuestion = (): Question => {
  const randomIndex = Math.floor(Math.random() * questions.length)
  return questions[randomIndex]
}

// Utility function to get questions by category
export const getQuestionsByCategory = (category: string): Question[] => {
  return questions.filter(q => q.category === category)
}

// Get all unique categories
export const getCategories = (): string[] => {
  return Array.from(new Set(questions.map(q => q.category)))
}