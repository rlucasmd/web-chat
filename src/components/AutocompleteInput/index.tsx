import React, { ChangeEvent, useState } from "react";
import {
  Autosuggestions,
  FormControl,
  Input,
  Item,
  Suggestions,
} from "./styles";
import { MagnifyingGlass } from "phosphor-react";

function AutocompleteInput() {
  const suggestions = [
    "banana",
    "maça",
    "pera",
    "uva",
    "abacate",
    "abacaxi",
    "beterraba",
    "azeitona",
  ];
  const [selectedValue, setSelectedValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setShowSuggestions(true);
    setSelectedValue(e.target.value);
  }
  const filteredData = suggestions.filter((suggestion) =>
    suggestion.includes(selectedValue),
  );
  function handleFocus(e: React.FocusEvent<HTMLInputElement>) {
    if (filteredData.length === 1 && selectedValue === filteredData[0]) return;

    setShowSuggestions(true);
  }
  function handleSelectSuggestion(suggestion: string) {
    setSelectedValue(suggestion);
    setShowSuggestions(false);
  }
  function handleLostFocus(e: React.FocusEvent<HTMLInputElement>) {
    console.log(e.currentTarget);
  }
  return (
    <Autosuggestions>
      <FormControl show={showSuggestions}>
        <MagnifyingGlass size={16} />
        <Input
          type="search"
          placeholder="Digite um nome"
          value={selectedValue}
          onChange={(e) => handleChange(e)}
          onFocus={(e) => handleFocus(e)}
          onBlur={(e) => handleLostFocus(e)}
        />
      </FormControl>
      <Suggestions show={showSuggestions}>
        {filteredData.map((suggestion) => (
          <Item
            key={suggestion}
            onClick={() => handleSelectSuggestion(suggestion)}
          >
            {suggestion}
          </Item>
        ))}
      </Suggestions>
    </Autosuggestions>
  );
}

export { AutocompleteInput };
