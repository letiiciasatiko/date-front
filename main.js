function dataAntiga() {
    const date1 = new Date(document.getElementById("date1").value);
    const date2 = new Date(document.getElementById("date2").value);
    if (date1 < date2) {
      document.getElementById("result").innerText = "Date 1 is greater: " + date1.toDateString();
    } else if (date2 < date1) {
      document.getElementById("result").innerText = "Date 2 is greater: " + date2.toDateString();
    } else {
      document.getElementById("result").innerText = "Both dates are equal";
    }
  }
  
  function calcularIntervalo() {
    const date1 = new Date(document.getElementById("date1").value);
    const date2 = new Date(document.getElementById("date2").value);
    if (date1 > date2) {
      const interval = date1.getTime() - date2.getTime();
      const days = Math.floor(interval / (1000 * 60 * 60 * 24));
      document.getElementById("result").innerText = "Interval between dates: " + days + " days";
    } else {
      document.getElementById("result").innerText = "Date 1 should be older than Date 2.";
    }
  }
  
  function horarioAtual() {
    const now = new Date();
    const formattedDate = now.toLocaleString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
    document.getElementById("result").innerText = "Current Date and Time: " + formattedDate;
  }
  
  // Calling getCurrentDateTime() to display current date and time when page loads
  getCurrentDateTime();
  