"use client";
import React from "react";
import { customStyles } from "./delivery-input-custom-styles";
import dynamic from "next/dynamic";

const GooglePlacesAutocomplete = dynamic(
  () => import("react-google-places-autocomplete"),
  { ssr: false }
);

interface Props {
  onChange?: (value?: string) => void;
}
export const DeliveryInput = ({ onChange }: Props) => {
  return (
    <div>
      <GooglePlacesAutocomplete
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY}
        apiOptions={{ language: "uk", region: "uk" }}
        selectProps={{
          styles: customStyles,
          placeholder: "Введіть адресу...",
          onChange: (data) => onChange?.(data?.value.description as string),
        }}
      />
    </div>
  );
};
