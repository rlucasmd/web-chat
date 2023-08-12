import { ChangeEvent, useState } from "react";
import {
  Autosuggestions,
  FormControl,
  Input,
  Item,
  Suggestions,
} from "./styles";
import { MagnifyingGlass, X } from "phosphor-react";
import { Button } from "../Button";
import { Avatar } from "../Avatar";

type IUser = {
  id: string;
  displayName: string;
  photoURL: string;
  email: string;
};

type IAutocomplete = {
  data: IUser[];
  onSelectAUser: (user: IUser) => void;
};

function AutocompleteInput({ data, onSelectAUser }: IAutocomplete) {
  const [selectedValue, setSelectedValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setShowSuggestions(true);

    setSelectedValue(e.target.value);
  }
  const filteredData = data.filter((suggestion) =>
    suggestion.displayName.startsWith(selectedValue),
  );
  function handleSelectSuggestion(suggestion: IUser) {
    onSelectAUser(suggestion);
    setSelectedValue("");
    setShowSuggestions(false);
  }

  function separateHighlightedPart(suggestion: string, highlighted: string) {
    const highlightedLength = highlighted.length;
    const substring = suggestion.substring(
      highlightedLength,
      suggestion.length,
    );

    return substring;
  }

  function clearSelection() {
    setShowSuggestions(false);
    setSelectedValue("");
  }

  return (
    <Autosuggestions>
      <FormControl show={showSuggestions}>
        <MagnifyingGlass size={16} />
        <Input
          type="text"
          placeholder="Digite um nome"
          value={selectedValue}
          onChange={(e) => handleChange(e)}
        />
        <Button type="button" onClick={clearSelection}>
          <X weight="bold" />
        </Button>
      </FormControl>
      <Suggestions show={showSuggestions}>
        {filteredData.map((suggestion) => (
          <Item
            key={suggestion.id}
            onClick={() => handleSelectSuggestion(suggestion)}
          >
            <Avatar src={suggestion.photoURL} size="medium" />
            <div>
              <div>
                <strong>{selectedValue}</strong>
                <span>
                  {separateHighlightedPart(
                    suggestion.displayName,
                    selectedValue,
                  )}
                </span>
              </div>
              <p> {suggestion.email}</p>
            </div>
          </Item>
        ))}
      </Suggestions>
    </Autosuggestions>
  );
}

export { AutocompleteInput };
