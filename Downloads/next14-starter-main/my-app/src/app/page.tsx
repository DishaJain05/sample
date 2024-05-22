import Image from 'next/image';

const Home = () => {
  return (
    <div>
      <h1>Shri Vishnu Engineering College For Women !!</h1>
      <br />
      <Image src="/campus.jpg" alt="College Image" width={1000} height={500} />
      
      <br />
      <br />
      <p>Welcome to Shri Vishnu Engineering College for Women</p>
      <p>
        At Shri Vishnu Engineering College for Women (SVECW), we believe in empowering women through education and fostering a dynamic learning environment where creativity, innovation, and excellence thrive.

        As one of the leading institutions in Bhimavaram, Andhra Pradesh, SVECW is committed to providing exceptional educational opportunities in engineering, information technology, and business management. Our dedicated faculty, state-of-the-art facilities, and vibrant campus community create an enriching experience for every student.

        Whether you're a prospective student exploring your academic options, a current student navigating your educational journey, or an alumna reflecting on your time at SVECW, we welcome you to explore all that our college has to offer.

        Join us as we embark on a journey of knowledge, discovery, and transformation. Together, let's shape the future of women in engineering and beyond.

        Welcome to SVECW!
      </p>
    </div>
  );
};

export default Home;
