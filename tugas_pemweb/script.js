const inputVisit = document.getElementById("visitType");

inputVisit.addEventListener("change", function () {
    const inputVisitDiv = inputVisit.parentElement;

    // Remove all previously added elements
    const clearPreviousInputs = () => {
        const referralLetterInput = document.getElementById("referralLetter");
        if (referralLetterInput) {
            referralLetterInput.parentElement.remove();
        }

        const specializationInput = document.getElementById("specialization");
        if (specializationInput) {
            specializationInput.parentElement.remove();
        }

        const medicalRecordInput = document.getElementById("medicalRecord");
        if (medicalRecordInput) {
            medicalRecordInput.parentElement.remove();
        }

        const drScheduleInput = document.getElementById("drSchedule");
        if (drScheduleInput) {
            drScheduleInput.parentElement.remove();
        }
    };

    clearPreviousInputs();

    if (inputVisit.value == '2') {

        const newDiv = document.createElement("div");
        newDiv.className = "mb-3";
        newDiv.innerHTML = `
            <label for="referralLetter" class="form-label">Masukkan Surat Rujukan Dokter</label>
            <input type="file" class="form-control" id="referralLetter" aria-label="file example" required>
        `;
        inputVisitDiv.insertAdjacentElement("afterend", newDiv);
    } 
    else if (inputVisit.value == '3') {
        // Add specialization input
        const specializationDiv = document.createElement("div");
        specializationDiv.className = "mb-3";
        specializationDiv.innerHTML = `
            <label for="specialization" class="form-label">Pilih Spesialisasi</label>
            <select class="form-select" id="specialization" aria-label="Default select example required">
                <option value=""></option>
                <option value="1">Spesialis Jantung</option>
                <option value="2">Spesialis Paru-paru</option>
                <option value="3">Spesialis Kulit dan Kelamin</option>
                <option value="4">Spesialis Penyakit Dalam</option>
                <option value="5">Spesialis Kandungan</option>
            </select>
        `;
        inputVisitDiv.insertAdjacentElement("afterend", specializationDiv);

        // Add medical record input
        const medicalRecordDiv = document.createElement("div");
        medicalRecordDiv.className = "mb-3";
        medicalRecordDiv.innerHTML = `
            <label for="medicalRecord" class="form-label">Masukkan Nomor Rekam Medis</label>
            <input type="text" pattern="^[0-9]+$" id="medicalRecord" class="form-control" aria-label="medical record" required>
        `;
        specializationDiv.insertAdjacentElement("beforebegin", medicalRecordDiv);

        // Add event listener for specialization
        const specializationInput = document.getElementById("specialization");
        specializationInput.addEventListener("change", function () {
            // Clear previous doctor schedule input
            const drScheduleInput = document.getElementById("drSchedule");
            if (drScheduleInput) {
                drScheduleInput.parentElement.remove();
            }

            let doctorOptions = '';
            if (specializationInput.value == "1") {
                doctorOptions = `
                    <label for="drJantungSchedule" class="form-label">Pilih Jadwal Dokter Jantung</label>
                    <select class="form-select" id="drSchedule" aria-label="Default select example" required>
                        <option value="1">Dr. Andi Rahman, Sp.JP, Senin, Pukul 08.00-09.00</option>
                        <option value="2">Dr. Rini Suryani, Sp.JP, Jum'at, Pukul 13.00-15.00</option>
                    </select>
                `;
            } else if (specializationInput.value == "2") {
                doctorOptions = `
                    <label for="drParuSchedule" class="form-label">Pilih Jadwal Dokter Paru-paru</label>
                    <select class="form-select" id="drSchedule" aria-label="Default select example" required>
                        <option value="1">Dr. Budi Santoso, Sp.P, Selasa, Pukul 09.00-11.00</option>
                        <option value="2">Dr. Dina Kartini, Sp.P, Kamis, Pukul 14.00-16.00</option>
                    </select>
                `;
            } else if (specializationInput.value == "3") {
                doctorOptions = `
                    <label for="drKulitSchedule" class="form-label">Pilih Jadwal Dokter Kulit dan Kelamin</label>
                    <select class="form-select" id="drSchedule" aria-label="Default select example" required>
                        <option value="1">Dr. Faisal Noor, Sp.KK, Rabu, Pukul 10.00-12.00</option>
                        <option value="2">Dr. Dita Anwar, Sp.KK, Sabtu, Pukul 13.00-15.00</option>
                    </select>
                `;
            } else if (specializationInput.value == "4") {
                doctorOptions = `
                    <label for="drPenyakitDalamSchedule" class="form-label">Pilih Jadwal Dokter Penyakit Dalam</label>
                    <select class="form-select" id="drSchedule" aria-label="Default select example" required>
                        <option value="1">Dr. Henry Setiawan, Sp.PD, Senin, Pukul 10.00-12.00</option>
                        <option value="2">Dr. Anita Putri, Sp.PD, Kamis, Pukul 08.00-10.00</option>
                    </select>
                `;
            } else if (specializationInput.value == "5") {
                doctorOptions = `
                    <label for="drKandunganSchedule" class="form-label">Pilih Jadwal Dokter Kandungan</label> <br>
                    <select class="form-select" id="drSchedule" aria-label="Default select example" required>
                        <option value="1">Dr. Lina Sari, Sp.OG, Rabu, Pukul 09.00-11.00</option>
                        <option value="2">Dr. Siti Nurhaya, Sp.OG, Jumat, Pukul 15.00-17.00</option>
                    </select>
                `;
            }

            // Create and insert the doctor schedule input
            if (doctorOptions) {
                const newDiv = document.createElement("div");
                newDiv.className = "mb-3";
                newDiv.innerHTML = doctorOptions;
                specializationInput.parentElement.insertAdjacentElement("afterend", newDiv);
            }
        });
    } 
});


const visitForm = document.getElementById("visitForm");

visitForm.addEventListener("submit", function (e) {
    const visitType = document.getElementById("visitType").value;
    const modalTitle = document.getElementById("modalTitle");
    const modalBody = document.getElementById("modalBody");

    e.preventDefault();

    if(visitType=="2"){
        modalTitle.className="modal-title text-success"
        modalTitle.innerText="Dokumen Surat Rujukan Anda Telah Terkirim!";
        modalBody.innerText="Dokumen Surat Rujukan Anda Telah Terkirim! Tunggu pemberitahuan selanjutnya di WhatsApp untuk detail hasil review surat rujukan dan juga jadwal periksa.";
    } else if(visitType=="3"){
        modalTitle.className="modal-title text-success"
        modalTitle.innerText = "Pendaftaran Berhasil!";
        modalBody.innerText = "Pendaftaran kunjungan kontrol anda telah diterima! Silahkan hadir tepat waktu sesuai waktu yang dipilih.";
    } else {
        modalTitle.className="modal-title text-danger"
        modalTitle.innerText = "Kesalahan";
        modalBody.innerText = "Silakan pilih jenis kunjungan.";
    }
    
});
