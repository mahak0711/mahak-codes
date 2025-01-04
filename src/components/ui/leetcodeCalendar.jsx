import LeetCodeCalendar from 'leetcode-calendar';

export default function Leetcode() {
    

    // Get the current year
    const currentYear = new Date().getFullYear();

    return (
      <div>
        <LeetCodeCalendar
          username='mahak0711' 
          blockSize={15} 
          blockMargin={5} 
          fontSize={16} 
          
          year={currentYear} 
          style={{ maxWidth: '1100px' }} 
        />
      </div>
    );
}
