export type Address = {
  address1: string;
  city: string;
  region: string;
}

type Banner = {
  name?: string;
  address?: Address;
  openTime?: string;
  children?: React.ReactNode;
}

const renderPrettyAddress = (address?: Address) => {
  return (
    <>
      {address && <span>{address.address1} in {address.city}, {address.region}</span>}
    </>
  )
}

const Banner = (props: Banner) => {
  const {
    name,
    address,
    openTime,
    children,
  } = props;

  return (
    <>
      <div className="bg-red-900 text-5xl font-bold text-white p-4 flex items-center justify-center flex-row space-x-20 w-full">
        <div className="flex-col space-y-10 text-center">
          <div>{name}</div>
          <div>{renderPrettyAddress(address)}</div>
          <div>Open Until {openTime}</div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Banner;