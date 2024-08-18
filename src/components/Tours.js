import Card from './Card';


function Tours({tours, removeTour}){
    return(
        <div >
            <div className='flex justify-center mb-10'>
                <h2 className='text-slate-200 text-4xl py-5 px-8 text-center rounded-md border-double border-slate-400 border-2'>Plan With Shahil</h2>
            </div>
            <div className='grid grid-cols-3 gap-9'>
                {
                    tours.map( (tour)=>{
                        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                        }
                    )
                }
            </div>
        </div>
    );

}
export default Tours;