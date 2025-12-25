import Header from '../Header';

export default function HeaderExample() {
  return (
    <Header 
      ticketCount={2} 
      onSearch={(query) => console.log('Search:', query)} 
    />
  );
}
