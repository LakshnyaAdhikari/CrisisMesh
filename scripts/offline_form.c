#include <stdio.h>

int main() {
    char city[50], type[50], urgency[20], desc[200];

    printf("Enter your city: ");
    scanf("%s", city);

    printf("Type of help needed (Food/Shelter/etc): ");
    scanf("%s", type);

    printf("Urgency (low/medium/high): ");
    scanf("%s", urgency);

    printf("Short description: ");
    getchar();  // clear input buffer
    fgets(desc, sizeof(desc), stdin);

    FILE *fptr = fopen("offline_request.txt", "w");
    if (fptr == NULL) {
        printf("Error saving request.\n");
        return 1;
    }

    fprintf(fptr, "City: %s\nType: %s\nUrgency: %s\nDescription: %s", city, type, urgency, desc);
    fclose(fptr);

    printf("✅ Saved offline as offline_request.txt\n");
    return 0;
}
