// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

type Security struct {
	RootKey *string `security:"scheme,type=http,subtype=bearer,name=Authorization"`
}

func (o *Security) GetRootKey() *string {
	if o == nil {
		return nil
	}
	return o.RootKey
}