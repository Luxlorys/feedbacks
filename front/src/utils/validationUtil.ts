// validationUtils.ts
export function validateFields(
    selectedBarista: string,
    customBaristaName: string,
    selectedStar: number,
    comment: string
  ): boolean {
    // Check if all fields are filled
    return (
      selectedBarista.trim() !== "" &&
      (selectedBarista !== "Інший" || customBaristaName.trim() !== "") &&
      selectedStar !== 0 &&
      comment.trim() !== ""
    );
  }
  