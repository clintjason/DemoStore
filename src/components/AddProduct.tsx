
type ProductData = {
  name: string;
  description: string;
  imageUrl: string;
  currency: string;
  amount: string;
}

type UserFormProps = ProductData & {
  updateFields: (fields: Partial<ProductData>) => void,
  updateField: (field: Partial<ProductData>) => void,
  error: any,
}

export function AddProductForm ({ name, description, email, tel, password, confirm_pwd, updateFields, updateField, error}: UserFormProps) {
  
  return (
    <form>
      <div className="form_item">
        <label>Product Name<span className="make_blue">*</span></label>
        <input
          required
          type="text"
          placeholder="Input Your First Name"
          value={name}
          onChange={e => updateField({ name: e.target.value })}
          onBlur={e => updateFields({ name: e.target.value })}
        />
        {error?.firstName && (
          <p role="alert" className="error_msg">{error?.firstName}</p>
        )}
      </div>
      <div className="form_item">
        <label>Description<span className="make_blue">*</span></label>
        <input
          required
          type="text"
          placeholder="Input Your Description"
          value={description}
          onChange={e => updateField({ description: e.target.value })}
          onBlur={e => updateFields({ description: e.target.value })}
        />
        {error?.description && (
          <p role="alert" className="error_msg">{error?.description}</p>
        )}
      </div>
      <div className="form_item">
        <label>Product Image Url<span className="make_blue">*</span></label>
        <input
          required
          type="text"
          placeholder="Input Your image URL"
          value={description}
          onChange={e => updateField({ description: e.target.value })}
          onBlur={e => updateFields({ description: e.target.value })}
        />
        {error?.description && (
          <p role="alert" className="error_msg">{error?.description}</p>
        )}
      </div>
      
    </form>
  )
} 
