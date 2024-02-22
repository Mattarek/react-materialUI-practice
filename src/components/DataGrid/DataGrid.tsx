import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'firstName',
        headerName: 'First name',
        width: 150,
        editable: true,
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 150,
        editable: true,
    },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 150,
        editable: true,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 150,
        valueGetter: (params: GridValueGetterParams) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: 'Daenerys', age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 10, lastName: 'Snow', firstName: 'Jon', age: 14 },
    { id: 12, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
    { id: 13, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
    { id: 14, lastName: 'Stark', firstName: 'Arya', age: 11 },
    { id: 15, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 16, lastName: 'Melisandre', firstName: 'Daenerys', age: 150 },
    { id: 17, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 18, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 19, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 20, lastName: 'Snow', firstName: 'Jon', age: 14 },
    { id: 212, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
    { id: 23, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
    { id: 24, lastName: 'Stark', firstName: 'Arya', age: 11 },
    { id: 25, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 26, lastName: 'Melisandre', firstName: 'Daenerys', age: 150 },
    { id: 27, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 28, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 29, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 31, lastName: 'Snow', firstName: 'Jon', age: 14 },
    { id: 32, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
    { id: 33, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
    { id: 34, lastName: 'Stark', firstName: 'Arya', age: 11 },
    { id: 35, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 36, lastName: 'Melisandre', firstName: 'Daenerys', age: 150 },
    { id: 37, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 38, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 39, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export const DataGridDemo = () => {
    return (
        <Box sx={{ height: 800, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 12,
                        },
                    },
                }}
                pageSizeOptions={[12]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </Box>
    );
};
