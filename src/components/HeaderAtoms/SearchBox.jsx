import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';


const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f4f4f4;
  margin: 10px;
  padding: 10px;
  border: none;
  width: 400px;
`;

const SearchIconWrapper = styled.div`
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;

const SearchInput = styled.input`
  border: none;
  width: 100%;
  padding: 10px;
  background-color: transparent;
  &:focus {
    outline: none;
  }
`;
const SearchBox = () => {
    return (
        <SearchContainer>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <SearchInput placeholder="Search products..." />
        </SearchContainer>
    );
};

export default SearchBox;