document.getElementById("calcBtn").addEventListener("click", () => {
    const val = document.getElementById("dob").value;
    const out = document.getElementById("result");
    if (!val) {
      out.textContent = "Pick a date first.";
      return;
    }
  
    const [y, m, d] = val.split("-").map(Number);
    const today = new Date();
    let age = today.getFullYear() - y;
    const curMonth = today.getMonth() + 1;
    const curDay = today.getDate();
  
    if (curMonth < m || (curMonth === m && curDay < d)) {
      age--;
    }
  
    if (age < 0) {
      out.textContent = "Date is in the future.";
      return;
    }
  
    out.textContent = "Age: " + age;
  });