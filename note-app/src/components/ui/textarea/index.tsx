import React, {FC, useRef} from 'react'
import {useAutosizeTextArea} from '../../../hooks/useAutoSizeTextArea'

const TextArea: FC<{ value: string, onChange: (evt: React.ChangeEvent<HTMLTextAreaElement>) => void }> = ({ value, onChange }) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  useAutosizeTextArea(textAreaRef.current, value)

  return (
    <textarea
      ref={textAreaRef}
      value={value}
      rows={1}
      placeholder={'Take a note...'}
      onChange={onChange}
    />
  )
}

export { TextArea }
