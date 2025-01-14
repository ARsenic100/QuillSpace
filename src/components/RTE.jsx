import React from 'react';
import ReactQuill from 'react-quill';
import { Controller } from 'react-hook-form';
import 'react-quill/dist/quill.snow.css'; // Import Quill's default styles

export default function RTE({ name, control, label, defaultValue = "" }) {
  return (
    <div className="w-full pb-20">
      {label && <label className="inline-block mb-1 pl-1">{label}</label>}

      <Controller
        name={name || "content"}
        control={control}
        render={({ field: { onChange, value } }) => (
          <ReactQuill
            value={value || defaultValue} // Using value from react-hook-form or default value
            onChange={onChange}            // This will update the form data on change
            modules={{
              toolbar: [
                [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
                [{ 'align': [] }],
                ['bold', 'italic', 'underline', 'strike'],
                [{ 'color': [] }, { 'background': [] }],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                ['blockquote', 'code-block'],
                ['link', 'image', 'video'],
                ['undo', 'redo'],
                ['clean'],
                [{ 'indent': '-1' }, { 'indent': '+1' }],
                ['table'],
              ],
            }}
            style={{
              height: '400px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontSize: '14px',
              
            }}
          />
        )}
      />
    </div>
  );
}
