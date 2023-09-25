type Props = {
    children: React.ReactNode;
    big?: Boolean;
};
export default function CardComponent({ children,big=false }: Props) {
	return (
		<>
			<div
				className={`bg-white rounded-lg lg:h-[300px] px-3 py-4 overflow-hidden ${
					big ? "flex-1" : "lg:w-[35%]"
				}`}
			>
				{children}
			</div>
		</>
	);
}
