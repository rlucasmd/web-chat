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

type IUserData = {
  displayName: string;
  photoURL: string;
  email: string;
};

type IUser = IUserData & {
  id: string;
};

type IAutocomplete = {
  data: IUser[];
  onSelectAUser: (user: IUser) => void;
  placeholder?: string;
  error?: boolean;
  selectedSuggestions?: Map<string, IUserData>;
};

function AutocompleteInput({
  data,
  onSelectAUser,
  placeholder,
  error,
  selectedSuggestions,
}: IAutocomplete) {
  const [selectedValue, setSelectedValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setShowSuggestions(true);

    setSelectedValue(e.target.value);
  }
  const filteredData = data.filter((suggestion) =>
    suggestion.displayName.startsWith(selectedValue),
  );
  function handleSelectSuggestion(suggestion: IUser, isDisabled: boolean) {
    if (isDisabled) return;
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

  function handleFocus() {
    setShowSuggestions(true);
  }

  return (
    <Autosuggestions>
      <FormControl show={showSuggestions} variant={error ? "error" : "default"}>
        <MagnifyingGlass size={16} />
        <Input
          type="text"
          placeholder={placeholder}
          value={selectedValue}
          onChange={(e) => handleChange(e)}
          onFocus={handleFocus}
        />
        <Button type="button" onClick={clearSelection}>
          <X weight="bold" />
        </Button>
      </FormControl>
      <Suggestions show={showSuggestions}>
        {filteredData.map((suggestion) => {
          const disabled = selectedSuggestions?.has(suggestion.id);
          return (
            <Item
              key={suggestion.id}
              onClick={() => handleSelectSuggestion(suggestion, !!disabled)}
              disabled={disabled}
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
          );
        })}
      </Suggestions>
    </Autosuggestions>
  );
}

export { AutocompleteInput };
