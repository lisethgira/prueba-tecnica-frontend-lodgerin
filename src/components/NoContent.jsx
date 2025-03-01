const NoContent = () => {
    return (
      <div className="h-[336px] flex-col justify-center items-center gap-12 inline-flex">
        <div className="self-stretch h-20 flex-col justify-center items-center gap-4 flex">
          <div className="text-center text-[#333530] text-4xl font-bold font-['Montserrat']">
            Oh no!
          </div>
          <div className="text-center text-[#565b52] text-base font-semibold font-['Montserrat'] tracking-tight">
            ¡Pareces perdido en tu viaje!
          </div>
        </div>
        <div className="bg-neutral-50 rounded-[40px] justify-center items-center gap-4 inline-flex cursor-pointer">
          <div className="px-[22px] py-3 rounded-3xl justify-center items-center gap-2 flex">
            <div className="text-center text-[#354d18] text-sm font-bold font-['Montserrat'] leading-tight">
              Limpiar filtros
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default NoContent;
  