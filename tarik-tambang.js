function sum(accumulator, a) {
    return accumulator + a;
}

const tarikTambang = (val) => {
    const data = Array.from(val)
    if (data.length === 1) {
        console.log("Kekurangan peserta")
    } else {
        let mapping = []
        for (let i = 0; i < data.length; i++) {
            if (data[i] === 'A') {
                mapping.push(1)
            } else if (data[i] === 'B') {
                mapping.push(2)
            }  else if (data[i] === 'C') {
                mapping.push(3)
            }  else if (data[i] === 'D') {
                mapping.push(4)
            }
        }
        
        const leftTeam = mapping.slice(0, 3).reduce(sum, 0)
        const rightTeam = mapping.slice(3, data.length).reduce(sum, 0)
        
        if (leftTeam > rightTeam) {
            console.log("Kiri menang")
        } else {
            console.log("Kanan menang")
        }
    }
}

tarikTambang("D")