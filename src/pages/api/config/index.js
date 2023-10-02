// Import the necessary modules
import { SerialPort } from 'serialport';
import { ReadlineParser } from '@serialport/parser-readline';

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      const deviceLocation = 'COM6'; // Adjust this to your device
      const baudRate = 9600;

      try {
        const SP = new SerialPort({ path: deviceLocation, baudRate });

        // Wrap the serial port open operation in a Promise
        await new Promise((resolve, reject) => {
          SP.on('open', () => {
            console.log('Connection opened on', deviceLocation);
            resolve();
          });

          SP.on('error', (error) => {
            console.error('Error opening connection:', error);
            reject(error);
          });
        });

        const parse = SP.pipe(new ReadlineParser({ delimiter: '\n' }));

        parse.on('data', async (data) => {
          console.log('Data received:', data);
          
          // Check if the received data is the enrolled ID
          if (data) {
            const enrolledID = data;
            console.log('Enrolled ID:', enrolledID.id);

            // You can now use "enrolledID" in your application as needed
          }

          // Close the serial port when data is taken
          await new Promise((resolve, reject) => {
            SP.close((err) => {
              if (err) {
                console.error('Error closing serial port:', err.message);
                reject(err);
              } else {
                console.log('Connection closed on', deviceLocation);
                resolve();
              }
            });
          });
        });

        // ... (rest of your code) ...

        res.status(200).json({ message: 'Message written to serial port' });
      } catch (error) {
        console.error('Serial port error:', error);
        res.status(500).json({ error: 'Serial port error' });
      }

    default:
      break;
  }
}
