import Navbar from '@/components/Navbar';
import { createTheme, useTheme } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
	{ field: 'id', headerName: 'Id', width: 70 },
	{ field: 'name', headerName: 'Name', width: 200 },
	{ field: 'date', headerName: 'Date Generated', width: 500 },
];

let rows: { name: string; date: Date }[] = [];

function GenerateRows() {
	if (typeof window !== 'undefined') {
		const names = JSON.parse(localStorage.getItem('names') || '[]');

		names.map(
			(data: { name: string; date: Date; id?: number }, index: number) =>
				rows.push({ id: index + 1, ...data })
		);

		console.log(rows);
	}
}

GenerateRows();

export default function About() {
	return (
		<>
			<Navbar
				links={{
					title: 'Dashboard',
					others: [
						['Home', '/'],
						['About', '/about'],
					],
				}}
			/>
			<h1 className="flex mt-5 ml-[43%] font-bold text-3xl">All Saved Names</h1>

			<div>
				<DataGrid
					style={{
						display: 'flex',
						backgroundColor: '#0c1323',
						color: '#FFFFFF',
						height: 500,
						width: '70%',
						marginLeft: '15%',
						marginTop: '4%',
					}}
					className="text-slate-200"
					getRowId={(row) => row.id}
					rows={rows}
					columns={columns}
					initialState={{
						pagination: {
							paginationModel: {
								pageSize: 10,
							},
						},
					}}
					pageSizeOptions={[10]}
					checkboxSelection
				/>
			</div>
		</>
	);
}
