const generateSegitiga = async (req, res) => {
    try {
        const { data } = req.body;
        const numString = data.toString();
        const numLength = numString.length;
        let triangle = '';
      
        for (let i = 1; i <= numLength; i++) {
          let line = '';
      
          for (let j = 1; j <= i; j++) {
            if (j === 1) {
              line += numString[i - 1];
            } else {
              line += '0';
            }
          }
      
          triangle += line + '\n';
        }

  console.log(triangle)

        res.status(200).json(triangle)
    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
}

const generateBilanganGanjil = async (req, res) => {
    try {
        const { data } = req.body;

        
        if(isNaN(data)) {
            throw new Error('input must be number')
        }
        
        let result = [];
        for(let i = 0; i < data; i++) {
            if(i % 2 !== 0) {
                result.push(i)
            }
        }

        res.status(200).json(result)
    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
}

const generateBilanganPrima = async (req, res) => {
    try {
        const { data } = req.body;

        if(isNaN(data)) {
            throw new Error('input must be number')
        }

        function isPrime(num) {
            if (num <= 1) {
              return false;
            }
          
            for (let i = 2; i <= Math.sqrt(num); i++) {
              if (num % i === 0) {
                return false;
              }
            }
          
            return true;
          }
        
        let result = [];
        for(let i = 0; i < data; i++) {
            if(isPrime(i)) {
                result.push(i)
            }
        }

        res.status(200).json(result)
    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
}

module.exports = { generateSegitiga, generateBilanganGanjil, generateBilanganPrima };