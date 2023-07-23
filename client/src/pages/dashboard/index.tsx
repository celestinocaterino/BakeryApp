import React, { useCallback, useMemo, useState } from 'react';
import {
  MaterialReactTable,
  type MaterialReactTableProps,
  type MRT_Cell,
  type MRT_ColumnDef,
  type MRT_Row,
} from 'material-react-table';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  MenuItem,
  Stack,
  TextField,
  Tooltip,
  Typography,
  Container
} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { getProducts } from '../../services/products/queries';
import { deleteProduct, updateProduct, createProduct } from 'services/products/mutations';
import { useMutation, useQuery } from 'react-query';

export type Product = {
  id?: number;
  name: string;
  description: string;
  price: number;
  currency: string;
  quantity: number;
  created_at: string;
  updated_at: string;
};

const ProductDashboard = () => {
  

  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [tableData, setTableData] = useState<Product[]>(() => []);

  const deleteProductMutation = useMutation(deleteProduct);
  const updateProductMutation = useMutation(updateProduct);

  const {
    data: products,
    isLoading: productsLoading,
    refetch
  } = useQuery([], async () => getProducts());

  React.useEffect(() => {
    setTableData(products ?? []);
  }, [products]);

  const handleCreateNewRow = (values: Product) => {
    tableData.push(values);
    setTableData([...tableData]);
  };

  const handleSaveRowEdits: MaterialReactTableProps<Product>['onEditingRowSave'] =
    async ({ exitEditingMode, row, values }) => {
      updateProductMutation.mutate( {
        id: row.original.id as number,
        data: values
      }
        , 
        {
        onError: () => {
          //message.error('Incorrect Credentials. Try again');
        },
        onSuccess: async ({ data }: { data: any }) => {
          exitEditingMode();
          refetch();
        }
      });
    };

  const handleDeleteRow = useCallback(
    (row: MRT_Row<Product>) => {
      //send api delete request here, then refetch or update local table data for re-render
      deleteProductMutation.mutate(row.original.id as number, {
        onError: () => {
          //message.error('Incorrect Credentials. Try again');
        },
        onSuccess: async ({ data }: { data: any }) => {
          refetch();
        }
      });
    },
    [tableData],
  );


  const columns = useMemo<MRT_ColumnDef<Product>[]>(
    () => [
      {
        accessorKey: 'name',
        header: 'Name',
        size: 140,
      },
      {
        accessorKey: 'description',
        header: 'Description',
        size: 140,
      },
      {
        accessorKey: 'price',
        header: 'Price',
        size: 140,
      },
      {
        accessorKey: 'quantity',
        header: 'Quantity',
      },
      {
        accessorKey: 'currency',
        header: 'Currency',
        size: 80,
      },
    ],
    [],
  );

  return (
    <>
      <MaterialReactTable
        displayColumnDefOptions={{
          'mrt-row-actions': {
            muiTableHeadCellProps: {
              align: 'center',
            },
            size: 120,
          },
        }}
        columns={columns}
        data={tableData}
        editingMode="modal" //default
        enableColumnOrdering
        enableEditing
        onEditingRowSave={handleSaveRowEdits}
        renderRowActions={({ row, table }) => (
          <Box sx={{ display: 'flex', gap: '1rem' }}>
            <Tooltip arrow placement="left" title="Edit">
              <IconButton onClick={() => table.setEditingRow(row)}>
                <Edit />
              </IconButton>
            </Tooltip>
            <Tooltip arrow placement="right" title="Delete">
              <IconButton color="error" onClick={() => handleDeleteRow(row)}>
                <Delete />
              </IconButton>
            </Tooltip>
          </Box>
        )}
        renderTopToolbarCustomActions={() => (
          <Button
            onClick={() => setCreateModalOpen(true)}
            variant="contained"
          >
            Create product
          </Button>
        )}
      />
      <CreateNewProduct
        columns={columns}
        open={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
        onSubmit={handleCreateNewRow}
      />
    </>
  );
};

interface CreateModalProps {
  columns: MRT_ColumnDef<Product>[];
  onClose: () => void;
  onSubmit: (values: Product) => void;
  open: boolean;
}

//example of creating a mui dialog modal for creating new rows
export const CreateNewProduct = ({
  open,
  columns,
  onClose,
  onSubmit,
}: CreateModalProps) => {
  const [values, setValues] = useState<any>(() =>
    columns.reduce((acc, column) => {
      acc[column.accessorKey ?? ''] = '';
      return acc;
    }, {} as any),
  );
  const [inputList, setInputList] = useState([{ name: "", quantity: "", unit_of_measure: "" }]);
  const createProductMutation = useMutation(createProduct);

  const handleSubmit = () => {
    createProductMutation.mutate(
      values,
      {
      onError: () => {
        //message.error('Incorrect Credentials. Try again');
      },
      onSuccess: async ({ data }: { data: any }) => {
        window.location.reload();
      }
    });
    };

  const handleAddClick = () => {
    setInputList([...inputList, { name: "", quantity: "", unit_of_measure: "" }]);
    console.log(inputList)
  };

  const handleInputChange = (e: any, index: any) => {
    const { name, value } = e.target;
    const list = [...inputList];
    //@ts-ignore
    list[index][name] = value;
    setInputList(list);
  };

  return (
    <Dialog open={open}>
      <DialogTitle textAlign="center">Create product</DialogTitle>
      <DialogContent>
        <form onSubmit={(e) => e.preventDefault()}>
          <Stack
            sx={{
              width: '100%',
              minWidth: { xs: '300px', sm: '360px', md: '400px' },
              gap: '1.5rem',
            }}
          >
            {columns.map((column) => (
              <TextField
                key={column.accessorKey}
                label={column.header}
                name={column.accessorKey}
                onChange={(e) =>
                  setValues({ ...values, [e.target.name]: e.target.value })
                }
              />
            ))}

            {inputList.map((x, i) => {
              return (
                <div className="box" key={i}>
                  <Container sx={{mb: 2, text: "center"}}>
                    Ingredient
                  </Container>
                  <div>
                    <TextField
                      name="name"
                      placeholder="Name"
                      value={x.name}
                      sx={{mb: 2}}
                      onChange={e => handleInputChange(e, i)}
                    />
                  </div>
                  <div>
                    <TextField
                      name="quantity"
                      placeholder="Quantity"
                      value={x.quantity}
                      sx={{mb: 2}}
                      onChange={e => handleInputChange(e, i)}
                    />
                  </div>
                  <div>
                    <TextField
                      name="unit_of_measure"
                      placeholder="Unit of measure"
                      value={x.unit_of_measure}
                      sx={{mb: 2}}
                      onChange={e => handleInputChange(e, i)}
                    />
                  </div>
                  <div className="btn-box">
                    {inputList.length - 1 === i &&
                      <Button onClick={handleAddClick} variant="outlined" size="small">
                        Add
                      </Button>
                    }
                  </div>
                </div>
              );
            })}
          </Stack>
        </form>
      </DialogContent>
      <DialogActions sx={{ p: '1.25rem' }}>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained">
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProductDashboard;