const http = require("http");

async function postJSON(url, data) {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify(data);
    const req = http.request(
      url,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": Buffer.byteLength(payload),
        },
      },
      (res) => {
        let body = "";
        res.on("data", (chunk) => (body += chunk));
        res.on("end", () => {
          try {
            resolve({ status: res.statusCode, data: JSON.parse(body) });
          } catch (e) {
            resolve({ status: res.statusCode, data: body });
          }
        });
      }
    );
    req.on("error", reject);
    req.write(payload);
    req.end();
  });
}

async function runAllIntroTests() {
  console.log("\n========================================================");
  console.log("🚀 VEXIS PRO — SELF INTRODUCTION COACH RIGOROUS TEST SUITE");
  console.log("========================================================\n");

  const testCases = [
    {
      id: "TEST A",
      name: "Empty response / silence / zero content",
      payload: {
        role: "Associate Consultant",
        experience: "Fresher",
        transcript: "",
        durationSeconds: 10,
      },
      check: (res) => {
        const sc = res.data.scores?.overallScore;
        const status = res.data.evaluationStatus;
        const note = res.data.evaluationNote;
        console.log(`  -> Overall Score: ${sc}/10 | Status: ${status}`);
        console.log(`  -> Note: "${note}"`);
        return sc === 0 && status?.includes("Insufficient");
      },
    },
    {
      id: "TEST B",
      name: "Name only ('Hi, I am John.')",
      payload: {
        role: "Associate Consultant",
        experience: "Fresher",
        transcript: "Hi, I am John.",
        durationSeconds: 5,
      },
      check: (res) => {
        const sc = res.data.scores?.overallScore;
        console.log(`  -> Overall Score: ${sc}/10`);
        console.log(`  -> Education Score: ${res.data.rubricBreakdown?.education?.score}`);
        console.log(`  -> Skills Score: ${res.data.rubricBreakdown?.technicalSkills?.score}`);
        console.log(`  -> Missing: ${res.data.whatIsMissing?.join(", ")}`);
        return sc >= 0.5 && sc <= 2.5 && res.data.rubricBreakdown?.education?.score === 0;
      },
    },
    {
      id: "TEST C",
      name: "Degree only ('I am pursuing MCA.')",
      payload: {
        role: "Associate Consultant",
        experience: "Fresher",
        transcript: "I am pursuing MCA.",
        durationSeconds: 5,
      },
      check: (res) => {
        const sc = res.data.scores?.overallScore;
        console.log(`  -> Overall Score: ${sc}/10`);
        console.log(`  -> Education Score: ${res.data.rubricBreakdown?.education?.score}`);
        console.log(`  -> Skills Score: ${res.data.rubricBreakdown?.technicalSkills?.score}`);
        return sc >= 1.0 && sc <= 3.0 && res.data.rubricBreakdown?.education?.score > 0 && res.data.rubricBreakdown?.projectsExperience?.score === 0;
      },
    },
    {
      id: "TEST D",
      name: "Full 30-60 second standard introduction",
      payload: {
        role: "MERN Developer",
        experience: "Fresher",
        transcript:
          "Hello, my name is Mohammed. I am pursuing my MCA in Computer Science. My technical skills include JavaScript, React, Node.js, and MongoDB. Recently, I built a full-stack e-commerce web application with real-time payment integration. I am eager to apply my technical background and problem-solving skills as a MERN Developer.",
        durationSeconds: 45,
      },
      check: (res) => {
        const sc = res.data.scores?.overallScore;
        console.log(`  -> Overall Score: ${sc}/10`);
        console.log(`  -> What was good: ${res.data.whatWasGood?.slice(0, 2).join("; ")}`);
        console.log(`  -> Must improve: ${res.data.mustImprove?.join("; ")}`);
        return sc >= 6.0 && sc <= 9.0;
      },
    },
    {
      id: "TEST E",
      name: "Excellent structured high-impact introduction",
      payload: {
        role: "Java Developer",
        experience: "1-3 Years",
        transcript:
          "Good morning. My name is Alex and I hold a Bachelor of Engineering in Computer Science with an 8.8 CGPA. Over the past two years, I have specialized in full-stack cloud development using Java, Spring Boot, React, PostgreSQL, and AWS. Recently, I engineered a high-throughput microservices billing engine that reduced transaction latency by 35% and handled 10,000 requests per minute. My core strengths are distributed system design and analytical debugging. My career goal is to architect resilient enterprise software, and I am excited to bring my technical expertise to the Java Developer role at your organization. Thank you.",
        durationSeconds: 60,
      },
      check: (res) => {
        const sc = res.data.scores?.overallScore;
        console.log(`  -> Overall Score: ${sc}/10`);
        console.log(`  -> Role Match: ${res.data.rubricBreakdown?.roleMatch?.score}`);
        console.log(`  -> Projects: ${res.data.rubricBreakdown?.projectsExperience?.score}`);
        return sc >= 8.5;
      },
    },
    {
      id: "TEST F",
      name: "Random unrelated speech (Recipe / Weather)",
      payload: {
        role: "Associate Consultant",
        experience: "Fresher",
        transcript:
          "Yesterday I went to the supermarket and bought some fresh apples and oranges, and then I baked a chocolate cake in the evening with my family.",
        durationSeconds: 20,
      },
      check: (res) => {
        const sc = res.data.scores?.overallScore;
        const roleScore = res.data.rubricBreakdown?.roleMatch?.score;
        console.log(`  -> Overall Score: ${sc}/10`);
        console.log(`  -> Role relevance score: ${roleScore}`);
        return sc <= 3.0 && roleScore === 0;
      },
    },
  ];

  let passed = 0;
  for (const tc of testCases) {
    console.log(`\n--------------------------------------------------------`);
    console.log(`RUNNING: [${tc.id}] ${tc.name}`);
    console.log(`Transcript: "${tc.payload.transcript}"`);
    try {
      const res = await postJSON("http://localhost:5000/api/introductions/analyze", tc.payload);
      if (res.status === 201 || res.status === 200) {
        const isOk = tc.check(res);
        if (isOk) {
          console.log(`✅ [${tc.id}] PASSED`);
          passed++;
        } else {
          console.error(`❌ [${tc.id}] FAILED ASSERTION`);
        }
      } else {
        console.error(`❌ [${tc.id}] HTTP ERROR ${res.status}:`, res.data);
      }
    } catch (err) {
      console.error(`❌ [${tc.id}] REQUEST ERROR:`, err.message);
    }
  }

  console.log("\n========================================================");
  console.log(`SUMMARY: ${passed} / ${testCases.length} TESTS PASSED`);
  console.log("========================================================\n");
  if (passed === testCases.length) {
    console.log("🎉 ALL TEST CASES SATISFIED EVIDENCE-BASED SCORING REQUIREMENTS!");
  } else {
    process.exit(1);
  }
}

runAllIntroTests();
